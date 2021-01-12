import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfferService } from '../../services/offer.service';
import { JobOfferModel } from '../../models/job-offer.model';
import { from } from 'rxjs';

@Component({
  selector: 'app-offer-details',
  templateUrl: './offer-details.component.html',
  styleUrls: ['./offer-details.component.scss'],
})
export class OfferDetailsComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private offerService: OfferService
  ) {}
  offer: JobOfferModel;
  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    this.offerService
      .getOffer(id)
      .subscribe((response) => (this.offer = response));
  }
  click() {
    console.log(this.offer);
  }
  color() {
    return {
      php: this.offer.marker_icon == 'php',
      ruby: this.offer.marker_icon == 'ruby',
      javascript: this.offer.marker_icon == 'javascript',
      net: this.offer.marker_icon == 'net',
      java: this.offer.marker_icon == 'java',
      python: this.offer.marker_icon == 'python',
      mobile: this.offer.marker_icon == 'mobile',
      scala: this.offer.marker_icon == 'scala',
      c: this.offer.marker_icon == 'c',
      testing: this.offer.marker_icon == 'testing',
      devops: this.offer.marker_icon == 'devops',
      uxui: this.offer.marker_icon == 'ux',
      pm: this.offer.marker_icon == 'pm',
      game: this.offer.marker_icon == 'game',
      analytics: this.offer.marker_icon == 'analytics',
      security: this.offer.marker_icon == 'security',
      data: this.offer.marker_icon == 'data',
      go: this.offer.marker_icon == 'go',
      sap: this.offer.marker_icon == 'sap',
      support: this.offer.marker_icon == 'support',
      other: this.offer.marker_icon == 'other',
      html: this.offer.marker_icon == 'html',
    };
  }
}
