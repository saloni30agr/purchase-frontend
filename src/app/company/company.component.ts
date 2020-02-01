import { Component, OnInit } from "@angular/core";
import { Company } from "./../company";
import { CompanyService } from "./../company.service";

@Component({
  selector: "app-company",
  templateUrl: "./company.component.html",
  styleUrls: ["./company.component.css"]
})
export class CompanyComponent implements OnInit {
  constructor(private companyService: CompanyService) {}

  ngOnInit() {
    this.getCompanies();
  }

  // selectedCompany: Company;

  // onSelect(company: Company): void {
  //   this.selectedCompany = company;
  // }
  companies: Company[];

  getCompanies(): void {
    // this.companies = this.companyService.getCompanies();
    this.companyService
      .getCompanies()
      .subscribe(companies => (this.companies = companies));
  }

  add(name: string, gst: string): void {
    name = name.trim();
    gst = gst.trim();
    if (!name || !gst) return;
    this.companyService
      .addCompany({ name, gst } as Company)
      .subscribe(newCompany => this.companies.push(newCompany));
  }
}
