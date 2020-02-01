import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { CompanyComponent } from "./company/company.component";
import { PurchaseOrderComponent } from './purchase-order/purchase-order.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {
    path: "companies",
    component: CompanyComponent
  },
  {
    path: "products",
    component: ProductComponent
  },
  {
    path: "purchase-orders",
    component: PurchaseOrderComponent
  }
];
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
