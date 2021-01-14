import { JobOfferModel } from './models/job-offer.model';

export interface AppState {
  readonly offer: JobOfferModel[];
}
