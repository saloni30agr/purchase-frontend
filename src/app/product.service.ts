import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError, tap } from "rxjs/operators";
import { Product } from "./product";

@Injectable({
  providedIn: "root"
})
export class ProductService {
  constructor(private http: HttpClient) {}

  private productUrl = "http://127.0.0.1:8000/invoice/product/";

  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  };

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      return of(result as T);
    };
  }

  getProducts(company: number): Observable<Product[]> {
    let productUrl = this.productUrl;
    if (company) {
      productUrl = `${this.productUrl}?company=${company}`;
    }
    return this.http.get<Product[]>(productUrl).pipe(
      tap(_ => console.log("fetched Products")),
      catchError(this.handleError<Product[]>("getProducts", []))
    );
  }

  addProduct(product: Product): Observable<Product> {
    console.log(product);
    return this.http
      .post<Product>(this.productUrl, product, this.httpOptions)
      .pipe(
        tap((newProduct: Product) =>
          console.log(`added hero w/ id=${newProduct.id}`)
        ),
        catchError(this.handleError<Product>("addProduct"))
      );
  }
}
