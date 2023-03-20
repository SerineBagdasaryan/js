import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CompanyInfoComponent} from "./company-info/company-info/company-info.component";

const routes: Routes = [
  {component: CompanyInfoComponent, path: ''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
