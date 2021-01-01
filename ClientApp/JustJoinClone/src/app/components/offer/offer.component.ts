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
}
