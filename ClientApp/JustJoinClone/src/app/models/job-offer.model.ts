import { EmploymentTypeModel } from './employment_type.model';
import { SkillModel } from './skill.model';

export interface JobOfferModel {
  _id: string;
  body: string;
  title: string;
  apply_body: string;
  street: string;
  city: string;
  country_code: string;
  address_text: string;
  marker_icon: string;
  workplace_type: string;
  company_name: string;
  company_url: string;
  company_size: string;
  experience_level: string;
  latitude: string;
  longitude: string;
  apply_url: string;
  published_at: string;
  remote_interview: string;
  video_key: string;
  video_provider: string;
  future_consent_title: string;
  future_consent: string;
  information_clause: string;
  custom_consent_title: string;
  custom_consent: string;
  id: string;
  tags: string;
  company_logo_url: string;
  skills: SkillModel[];
  remote: string;
  employment_types: EmploymentTypeModel;
}
