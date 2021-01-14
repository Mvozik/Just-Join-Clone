import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JobOfferModel } from '../models/job-offer.model';
import { environment } from '../../environments/environment';
import { FilterModel } from '../models/filter.model';

@Injectable({
  providedIn: 'root',
})
export class OfferService {
  constructor(private http: HttpClient) {}

  url = environment.baseUrl + '/offer';
  getOffers(): Observable<JobOfferModel[]> {
    return this.http.get<JobOfferModel[]>(this.url);
  }
  getOffer(id: string): Observable<JobOfferModel> {
    return this.http.get<JobOfferModel>(this.url + '/' + id);
  }

  getFilteredOffers(model: FilterModel): Observable<JobOfferModel[]> {
    return this.http.post<JobOfferModel[]>(this.url + '/filter', model);
  }
}
