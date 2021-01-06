import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JobOfferSchema } from 'src/models/job_offer.schema';
import { OfferController } from './offer/offer.controller';
import { OfferService } from './offer/offer.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'job_offer', schema: JobOfferSchema }]),
  ],
  controllers: [OfferController],
  providers: [OfferService],
})
export class OfferModule {}
