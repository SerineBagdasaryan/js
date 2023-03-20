import {Controller, Get, Param, Query} from '@nestjs/common';
import {CompanyInfoService} from "./company-info.service";
import {CompanyInfo} from "./interfaces/company-info";
import {InnQueryDto} from "./dto/inn-query.dto";

@Controller('company-info')
export class CompanyInfoController {
    constructor(private readonly _companyInfoService: CompanyInfoService) {
    }
    @Get('find-by-inn/:inn')
    findCompanyByInn(@Param('inn') inn: InnQueryDto): Promise<CompanyInfo> {
         return this._companyInfoService.findCompanyByInn(inn);
    }


}
