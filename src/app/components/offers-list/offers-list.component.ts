import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { JobOfferModel } from '../../models/job-offer.model';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';

@Component({
  selector: 'app-offers-list',
  templateUrl: './offers-list.component.html',
  styleUrls: ['./offers-list.component.scss'],
})
export class OffersListComponent implements OnInit {
  constructor(private store: Store<AppState>) {}

  offers: Observable<JobOfferModel[]>;
  ngOnInit(): void {
    this.offers = this.store.select('offer');
  }
}
