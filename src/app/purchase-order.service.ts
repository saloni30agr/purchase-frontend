import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError, tap } from "rxjs/operators";
import { PurchaseOrder } from "./purchaseOrder";

@Injectable({
  providedIn: "root"
})
export class PurchaseOrderService {
  constructor(private http: HttpClient) {}

  private purchaseOrderUrl = "http://127.0.0.1:8000/invoice/purchase_order/";

  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  };

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      return of(result as T);
    };
  }

  getPurchaseOrders(): Observable<PurchaseOrder[]> {
    return this.http.get<PurchaseOrder[]>(this.purchaseOrderUrl).pipe(
      tap(_ => console.log("fetched PurchaseOrder")),
      catchError(this.handleError<PurchaseOrder[]>("getPurchaseOrders", []))
    );
  }

  addPurchaseOrder(purchaseOrder: PurchaseOrder): Observable<PurchaseOrder> {
    console.log(purchaseOrder);
    return this.http
      .post<PurchaseOrder>(
        this.purchaseOrderUrl,
        purchaseOrder,
        this.httpOptions
      )
      .pipe(
        tap((newPurchaseOrder: PurchaseOrder) =>
          console.log(`added hero w/ id=${newPurchaseOrder.id}`)
        ),
        catchError(this.handleError<PurchaseOrder>("addPurchaseOrder"))
      );
  }
}
