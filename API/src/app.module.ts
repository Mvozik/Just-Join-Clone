import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { JobOfferSchema } from './models/job_offer.schema';
@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'job_offer', schema: JobOfferSchema }]),
    MongooseModule.forRoot(
      'mongodb+srv://piotrek:testtest@cluster0.obezc.mongodb.net/JUSTJOIN?retryWrites=true&w=majority',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
