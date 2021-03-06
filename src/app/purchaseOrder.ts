import { Company } from "./company";
import { Product } from "./product";

export class PurchaseOrder {
  id: number;
  po_number: string;
  company: number;
  product: number;
  quantity: number;
  total_price: number;
  company_name: string;
  product_name: string;
  product_cost: string;
}
