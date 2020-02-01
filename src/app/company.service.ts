import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

import { Company } from "./company";
import { COMPANIES } from "./company_list";

@Injectable({
  providedIn: "root"
})
export class CompanyService {
  constructor() {}

  getCompanies(): Observable<Company[]> {
    return of(COMPANIES);
  }
}
