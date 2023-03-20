import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {CompanyInfoService} from "../company-info.service";
import {Observable, of} from "rxjs";
import {CompanyInfo} from "../../interfaces/company-info";

@Component({
  selector: 'app-company-info',
  templateUrl: './company-info.component.html',
  styleUrls: ['./company-info.component.css']
})
export class CompanyInfoComponent implements OnInit {
  companyInfo$!: Observable<CompanyInfo>;
  inn = new FormControl('7707083893', [Validators.required]);
  constructor(private readonly _companyInfoService: CompanyInfoService) { }
  searchInn() {
     this.companyInfo$ = this._companyInfoService.companyInfo(this.inn.value!);
  }
  ngOnInit(): void {
  }

}
