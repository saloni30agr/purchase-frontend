import { Component, OnInit } from "@angular/core";
import { PurchaseOrderService } from "../purchase-order.service";
import { ProductService } from "../product.service";
import { CompanyService } from "../company.service";
import { Product } from "../product";
import { Company } from "../company";
import { PurchaseOrder } from "../purchaseOrder";

@Component({
  selector: "app-purchase-order",
  templateUrl: "./purchase-order.component.html",
  styleUrls: ["./purchase-order.component.css"]
})
export class PurchaseOrderComponent implements OnInit {
  constructor(
    private purchaseOrderService: PurchaseOrderService,
    private productService: ProductService,
    private companyService: CompanyService
  ) {}

  products: Product[];
  companies: Company[];
  selectedCompany: Company;
  selectedProduct: Product;
  purchaseOrders: PurchaseOrder[];
  nextPONumber: string;
  ngOnInit() {
    this.getPurchaseOrders();
    this.getCompanies();
    this.generatePONumber();
  }

  getCompanies(): void {
    this.companyService
      .getCompanies()
      .subscribe(companies => (this.companies = companies));
  }
  getProducts(): void {
    this.productService
      .getProducts(this.selectedCompany.id)
      .subscribe(products => (this.products = products));
  }

  getPurchaseOrders(): void {
    this.purchaseOrderService
      .getPurchaseOrders()
      .subscribe(purchaseOrders => (this.purchaseOrders = purchaseOrders));
  }

  dec2hex(dec: number): string {
    return ("0" + dec.toString(16)).substr(-2);
  }

  generateId(len: number): string {
    var arr = new Uint8Array((len || 40) / 2);
    window.crypto.getRandomValues(arr);
    return Array.from(arr, this.dec2hex).join("");
  }
  generatePONumber(): void {
    this.nextPONumber = this.generateId(8);
    console.warn(this.nextPONumber);
  }
  add(po_number: string, quantity: number): void {
    po_number = po_number.trim();
    let company = this.selectedCompany.id;
    let product = this.selectedProduct.id;
    let total_price = this.selectedProduct.cost * quantity;
    console.log(po_number, company, product, quantity, total_price);
    if (!po_number || !company || !product || !quantity || !total_price) return;
    this.purchaseOrderService
      .addPurchaseOrder({
        po_number,
        company,
        product,
        quantity,
        total_price
      } as PurchaseOrder)
      .subscribe(newPurchaseOrder =>
        this.purchaseOrders.push(newPurchaseOrder)
      );
    this.generatePONumber();
  }
}
