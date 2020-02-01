import { Component, OnInit } from "@angular/core";
import { Company } from "./../company";
// import { COMPANIES } from "./../company_list";
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

  company_name = "First Company";
  company: Company = {
    id: 1,
    name: "name",
    gst: "gstnumber"
  };
  companies: Company[];
  selectedCompany: Company;

  onSelect(company: Company): void {
    this.selectedCompany = company;
  }

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
