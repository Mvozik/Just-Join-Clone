import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { JobOfferSchema } from './models/job_offer.schema';
import { url } from './secret';
@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'job_offer', schema: JobOfferSchema }]),
    MongooseModule.forRoot(url),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
