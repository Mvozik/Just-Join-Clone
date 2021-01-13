import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { EmploymentTypeModel } from './employment_type.model';
import { SkillModel } from './skill.model';

@Schema()
export class JobOffer extends Document {
  _id: mongoose.Types.ObjectId;
  @Prop()
  body: string;
  @Prop()
  title: string;
  @Prop()
  apply_body: string;
  @Prop()
  street: string;
  @Prop()
  city: string;
  @Prop()
  country_code: string;
  @Prop()
  address_text: string;
  @Prop()
  marker_icon: string;
  @Prop()
  workplace_type: string;
  @Prop()
  company_name: string;
  @Prop()
  company_url: string;
  @Prop()
  company_size: string;
  @Prop()
  experience_level: string;
  @Prop()
  latitude: string;
  @Prop()
  longitude: string;
  @Prop()
  apply_url: string;
  @Prop()
  published_at: string;
  @Prop()
  remote_interview: string;
  @Prop()
  video_key: string;
  @Prop()
  video_provider: string;
  @Prop()
  future_consent_title: string;
  @Prop()
  future_consent: string;
  @Prop()
  information_clause: string;
  @Prop()
  custom_consent_title: string;
  @Prop()
  custom_consent: string;
  @Prop()
  id: string;
  @Prop()
  tags: string;
  @Prop()
  company_logo_url: string;
  @Prop()
  skills: SkillModel[];
  @Prop()
  remote: string;
  @Prop()
  employment_types: EmploymentTypeModel[];
}

export const JobOfferSchema = SchemaFactory.createForClass(JobOffer);
