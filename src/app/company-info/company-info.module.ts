import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyInfoComponent } from './company-info/company-info.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
@NgModule({
  declarations: [
    CompanyInfoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CompanyInfoModule { }
