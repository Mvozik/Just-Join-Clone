import { Component, Input, OnInit } from '@angular/core';
import { EmploymentTypeModel } from 'src/app/models/employment_type.model';
import { SalaryModel } from 'src/app/models/salary.model';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.scss'],
})
export class OfferComponent implements OnInit {
  constructor() {}

  @Input() category: string;
  @Input() name: string;
  @Input() employment: EmploymentTypeModel;
  @Input() from: string;
  @Input() to: string;

  ngOnInit(): void {}
  color() {
    return {
      php: this.category == 'php',
      ruby: this.category == 'ruby',
      javascript: this.category == 'javascript',
      net: this.category == 'net',
      java: this.category == 'java',
      python: this.category == 'python',
      mobile: this.category == 'mobile',
      scala: this.category == 'scala',
      c: this.category == 'c',
      testing: this.category == 'testing',
      devops: this.category == 'devops',
      uxui: this.category == 'ux',
      pm: this.category == 'pm',
      game: this.category == 'game',
      analytics: this.category == 'analytics',
      security: this.category == 'security',
      data: this.category == 'data',
      go: this.category == 'go',
      sap: this.category == 'sap',
      support: this.category == 'support',
      other: this.category == 'other',
      html: this.category == 'html',
    };
  }
}
