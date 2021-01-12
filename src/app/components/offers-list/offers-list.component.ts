import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { OfferService } from 'src/app/services/offer.service';
import { JobOfferModel } from '../../models/job-offer.model';

@Component({
  selector: 'app-offers-list',
  templateUrl: './offers-list.component.html',
  styleUrls: ['./offers-list.component.scss'],
})
export class OffersListComponent implements OnInit {
  constructor(private offerService: OfferService) {}

  offers: JobOfferModel[];
  ngOnInit(): void {
    this.offerService
      .getOffers()
      .subscribe((response) => (this.offers = response));
  }
  console() {
    console.log(this.offers);
  }
}
