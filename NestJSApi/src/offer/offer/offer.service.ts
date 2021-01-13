import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { JobOffer } from 'src/models/job_offer.schema';

@Injectable()
export class OfferService {
  constructor(@InjectModel('job_offer') private jobOffer: Model<JobOffer>) {}

  getAllOffers() {
    var response = this.jobOffer.find().limit(20);
    return response;
  }

  async getOfferById(id: string) {
    return await this.jobOffer.findById(id);
  }
}
