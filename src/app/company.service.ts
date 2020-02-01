import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError, tap } from "rxjs/operators";

import { Company } from "./company";

@Injectable({
  providedIn: "root"
})
export class CompanyService {
  constructor(private http: HttpClient) {}

  private companyUrl = "http://127.0.0.1:8000/invoice/company/";

  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  };
  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // // TODO: better job of transforming error for user consumption
      // this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  getCompanies(): Observable<Company[]> {
    // return of(COMPANIES);
    console.warn("dmfk");
    return this.http.get<Company[]>(this.companyUrl).pipe(
      tap(_ => console.log("fetched companies")),
      catchError(this.handleError<Company[]>("getCompanies", []))
    );
  }

  // getCompany(id: number): Observable<Company> {
  //   const url = `${this.companyUrl}/${id}`;
  //   return this.http.get<Company>(url).pipe(
  //     tap(_ => console.log(`fetched hero id=${id}`)),
  //     catchError(this.handleError<Company>(`getCompany id=${id}`))
  //   );
  // }

  /** POST: add a new hero to the server */
  addCompany(company: Company): Observable<Company> {
    console.log(company);
    return this.http
      .post<Company>(this.companyUrl, company, this.httpOptions)
      .pipe(
        tap((newCompany: Company) =>
          console.log(`added hero w/ id=${newCompany.id}`)
        ),
        catchError(this.handleError<Company>("addCompany"))
      );
  }
}
