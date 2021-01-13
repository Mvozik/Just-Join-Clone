import { Controller, Get, Inject, Param } from '@nestjs/common';
import { OfferService } from './offer.service';

@Controller('offer')
export class OfferController {
  constructor(@Inject(OfferService) private offerService: OfferService) {}

  @Get()
  getOffers() {
    return this.offerService.getAllOffers();
  }

  @Get('/:id')
  async getOffer(@Param('id') id: string) {
    return await this.offerService.getOfferById(id);
  }
}
