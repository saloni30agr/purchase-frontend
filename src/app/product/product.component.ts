import { Component, OnInit } from "@angular/core";
import { ProductService } from "../product.service";
import { CompanyService } from "../company.service";
import { Product } from "../product";
import { Company } from "../company";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.css"]
})
export class ProductComponent implements OnInit {
  constructor(
    private productService: ProductService,
    private companyService: CompanyService
  ) {}

  ngOnInit() {
    this.getCompanies();
    this.getProducts();
  }
  products: Product[];
  companies: Company[];
  selectedCompany: Company;

  getCompanies(): void {
    this.companyService
      .getCompanies()
      .subscribe(companies => (this.companies = companies));
  }

  getProducts(): void {
    this.productService
      .getProducts(null)
      .subscribe(products => (this.products = products));
  }

  add(name: string, cost: number): void {
    name = name.trim();
    let company = this.selectedCompany.id;
    console.log(name, company, cost);
    if (!name || !company || !cost) return;
    this.productService
      .addProduct({ name, company, cost } as Product)
      .subscribe(newProduct => this.products.push(newProduct));
  }
}
