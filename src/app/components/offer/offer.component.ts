import { Component, Input, OnInit } from '@angular/core';
import { EmploymentTypeModel } from 'src/app/models/employment_type.model';
import { JobOfferModel } from 'src/app/models/job-offer.model';
import { SalaryModel } from 'src/app/models/salary.model';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.scss'],
})
export class OfferComponent implements OnInit {
  constructor() {}

  @Input() offer: JobOfferModel;

  time: string;

  ngOnInit(): void {
    let date = Date.parse(this.offer.published_at);
    let actualDate = Date.now();
    var diff = Math.abs(date - actualDate);
    var diffDays = Math.ceil(diff / (1000 * 3600 * 24));
    if (diffDays < 1) {
      this.time = 'New';
    }
    if (diffDays == 1) {
      this.time = diffDays + ' day ago';
    }
    if (diffDays > 1) {
      this.time = diffDays + 'd ago';
    }
  }
  color() {
    return {
      php: this.offer.marker_icon == 'php',
      ruby: this.offer.marker_icon == 'ruby',
      javascript: this.offer.marker_icon == 'javascript',
      net: this.offer.marker_icon == 'net',
      java: this.offer.marker_icon == 'java',
      python: this.offer.marker_icon == 'python',
      mobile: this.offer.marker_icon == 'mobile',
      scala: this.offer.marker_icon == 'scala',
      c: this.offer.marker_icon == 'c',
      testing: this.offer.marker_icon == 'testing',
      devops: this.offer.marker_icon == 'devops',
      uxui: this.offer.marker_icon == 'ux',
      pm: this.offer.marker_icon == 'pm',
      game: this.offer.marker_icon == 'game',
      analytics: this.offer.marker_icon == 'analytics',
      security: this.offer.marker_icon == 'security',
      data: this.offer.marker_icon == 'data',
      go: this.offer.marker_icon == 'go',
      sap: this.offer.marker_icon == 'sap',
      support: this.offer.marker_icon == 'support',
      other: this.offer.marker_icon == 'other',
      html: this.offer.marker_icon == 'html',
    };
  }
}
