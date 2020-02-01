import { Component, OnInit } from "@angular/core";
import { ProductService } from "../product.service";
import { Product } from "../product";
import { Company } from "../company";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.css"]
})
export class ProductComponent implements OnInit {
  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.getProducts();
  }

  products: Product[];
  getProducts(): void {
    this.productService
      .getProducts()
      .subscribe(products => (this.products = products));
  }

  add(name: string, company: number, cost: number): void {
    name = name.trim();
    console.log(name, company, cost);
    if (!name || !company || !cost) return;
    this.productService
      .addProduct({ name, company, cost } as Product)
      .subscribe(newProduct => this.products.push(newProduct));
  }
}
