import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { JobOffer } from './models/job_offer.schema';

@Injectable()
export class AppService {
  constructor(@InjectModel('job_offer') private jobOffer: Model<JobOffer>) {}
  getHello() {
    return this.jobOffer.find();
  }
}
