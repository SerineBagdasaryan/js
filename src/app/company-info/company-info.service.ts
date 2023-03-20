import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {CompanyInfo} from "../interfaces/company-info";

@Injectable({
  providedIn: 'root'
})
export class CompanyInfoService {
  private readonly api: string = environment.apiUrl;
  constructor(private http: HttpClient) { }

  companyInfo(inn: string): Observable<CompanyInfo> {
    return this.http.get<CompanyInfo>(`${this.api}/company-info/find-by-inn/${inn}`);
  }
}
