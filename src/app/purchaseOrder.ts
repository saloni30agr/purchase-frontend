import { Company } from "./company";
import { Product } from "./product";

export class PurchaseOrder {
  po_number: string;
  company: Company;
  product: Product;
  quantity: number;
  total_price: number;
}
