import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JobOfferModel } from '../models/job-offer.model';

@Injectable({
  providedIn: 'root',
})
export class OfferService {
  constructor(private http: HttpClient) {}

  url = 'http://localhost:3000/offer';
  getOffers(): Observable<JobOfferModel[]> {
    return this.http.get<JobOfferModel[]>(this.url);
  }
  getOffer(id: string): Observable<JobOfferModel> {
    return this.http.get<JobOfferModel>(this.url + '/' + id);
  }
}
