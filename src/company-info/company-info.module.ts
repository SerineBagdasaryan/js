import { Module } from '@nestjs/common';
import { CompanyInfoController } from './company-info.controller';
import { CompanyInfoService } from './company-info.service';
import {HttpModule} from "@nestjs/axios";
import {TypeOrmModule} from "@nestjs/typeorm";
import {Companies} from "./entities/companies.entity";
import {ConfigService} from "@nestjs/config";

@Module({
  imports: [HttpModule,
    TypeOrmModule.forFeature([Companies])
  ],
  controllers: [CompanyInfoController],
  providers: [CompanyInfoService, ConfigService]
})
export class CompanyInfoModule {}
