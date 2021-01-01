import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { JobOfferModel } from '../../models/job-offer.model';

@Component({
  selector: 'app-offers-list',
  templateUrl: './offers-list.component.html',
  styleUrls: ['./offers-list.component.scss'],
})
export class OffersListComponent implements OnInit {
  constructor(private httpClient: HttpClient) {}

  offers: JobOfferModel[];
  ngOnInit(): void {
    this.httpClient
      .get<JobOfferModel[]>('http://localhost:3000')
      .subscribe((response) => (this.offers = response));
  }
  console() {
    console.log(this.offers);
  }
}
