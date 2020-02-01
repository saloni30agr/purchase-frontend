import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { CompanyComponent } from "./company/company.component";
import { CompanyDetailComponent } from "./company-detail/company-detail.component";
import { AppRoutingModule } from "./app-routing.module";
import { ProductComponent } from './product/product.component';
import { PurchaseOrderComponent } from './purchase-order/purchase-order.component';

@NgModule({
  declarations: [AppComponent, CompanyComponent, CompanyDetailComponent, ProductComponent, PurchaseOrderComponent],
  imports: [BrowserModule, FormsModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
