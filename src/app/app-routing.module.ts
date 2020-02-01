import { NgModule } from "@angular/core";
// import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";

import { CompanyComponent } from "./company/company.component";
import { CompanyDetailComponent } from "./company-detail/company-detail.component";

const routes: Routes = [
  {
    path: "companies",
    component: CompanyComponent
  }
  // {
  //   path: "company-detail/:id",
  //   component: CompanyDetailComponent
  // }
];
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
