import { JobOfferModel } from '../models/job-offer.model';
import * as OfferActions from '../actions/offer.actions';

const initialState: JobOfferModel[] = [];

export function reducer(
  state: JobOfferModel[] = initialState,
  action: OfferActions.Actions
) {
  switch (action.type) {
    case OfferActions.SET_OFFERS:
      return action.payload;

    default:
      return state;
  }
}
