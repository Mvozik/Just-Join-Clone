import { Component, Input, OnInit } from '@angular/core';
import { SkillModel } from '../../models/skill.model';

@Component({
  selector: 'app-offer-details-skills',
  templateUrl: './offer-details-skills.component.html',
  styleUrls: ['./offer-details-skills.component.scss'],
})
export class OfferDetailsSkillsComponent implements OnInit {
  @Input() skills: SkillModel[];

  constructor() {}

  ngOnInit(): void {}
}
