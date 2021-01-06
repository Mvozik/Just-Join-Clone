import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { url } from './secret';
import { OfferModule } from './offer/offer.module';
@Module({
  imports: [MongooseModule.forRoot(url), OfferModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
