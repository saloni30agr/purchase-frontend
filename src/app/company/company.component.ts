import { Component, OnInit } from "@angular/core";
import { Company } from "./../company";

@Component({
  selector: "app-company",
  templateUrl: "./company.component.html",
  styleUrls: ["./company.component.css"]
})
export class CompanyComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  company_name = "First Company";
  company: Company = {
    id: 1,
    name: "name",
    gst: "gstnumber"
  };
}
