import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { CompanyComponent } from "./company/company.component";

const routes: Routes = [
  {
    path: "companies",
    component: CompanyComponent
  }
];
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
