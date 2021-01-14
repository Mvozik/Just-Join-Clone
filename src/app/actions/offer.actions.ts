import { Action } from '@ngrx/store';
import { JobOfferModel } from '../models/job-offer.model';

export const SET_OFFERS = '[OFFERMODEL] Set';

export class SetOffers implements Action {
  readonly type = SET_OFFERS;

  constructor(public payload: JobOfferModel[]) {}
}

export type Actions = SetOffers;
