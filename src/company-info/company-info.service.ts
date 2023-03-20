import {Injectable, NotFoundException} from '@nestjs/common';
import {firstValueFrom} from "rxjs";
import {ConfigService} from "@nestjs/config";
import { HttpService } from '@nestjs/axios';
import {CompanyInfo} from "./interfaces/company-info";
import {InnQueryDto} from "./dto/inn-query.dto";
import {Repository} from "typeorm";
import {InjectRepository} from "@nestjs/typeorm";
import {Companies} from "./entities/companies.entity";

@Injectable()
export class CompanyInfoService {
    private baseUrl: string;
    private apiKey: string;
    constructor(private readonly _configService: ConfigService,
                private readonly _httpService: HttpService,
                @InjectRepository(Companies)
                private innsRepository: Repository<Companies>) {

        this.baseUrl = this._configService.get<string>('DADATA_API_URL');
        this.apiKey = this._configService.get<string>('DADATA_TOKEN');
    }
    public async findCompanyByInn(query: InnQueryDto): Promise<CompanyInfo> {
        try {
            const getByInn = await this.innsRepository
                .createQueryBuilder('inns')
                .where('"inn" = :query', { query })
                .select(['inns.name'])
                .getOne();
            if (getByInn) {
                return getByInn;
            } else {
                const {
                    data: {suggestions},
                } = await firstValueFrom(
                    this._httpService.request<{ suggestions }>({
                        url: `${this.baseUrl}findById/party`,
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            Accept: 'application/json',
                            Authorization: 'Token ' + this.apiKey,
                        },
                        data: {query},
                    }),
                );
                if (!suggestions.length) {
                    throw new NotFoundException();
                }
                await this.innsRepository.createQueryBuilder()
                    .insert()
                    .into(Companies)
                    .values([ { name: suggestions[0].value,  inn: suggestions[0].data.inn}])
                    .execute()
                return {name: suggestions[0].value};
            }
        } catch (e) {
            throw new NotFoundException();
        }
    }
}
