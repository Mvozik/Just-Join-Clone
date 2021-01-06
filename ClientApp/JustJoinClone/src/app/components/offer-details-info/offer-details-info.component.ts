import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-offer-details-info',
  templateUrl: './offer-details-info.component.html',
  styleUrls: ['./offer-details-info.component.scss'],
})
export class OfferDetailsInfoComponent implements OnInit {
  @Input() name: string;
  @Input() text: string;
  @Input() iconstring: string;
  @Input() companyUrl: string;
  constructor() {}

  ngOnInit(): void {
    if (this.text == 'Added') {
      let date = Date.parse(this.name);
      let actualDate = Date.now();
      var diff = Math.abs(date - actualDate);
      var diffDays = Math.ceil(diff / (1000 * 3600 * 24));
      if (diffDays < 1) {
        this.name = 'New';
      }
      if (diffDays == 1) {
        this.name = diffDays + ' day ago';
      }
      if (diffDays > 1) {
        this.name = diffDays + ' days ago';
      }
    }
  }

  iconColor() {
    return {
      red: this.iconstring == 'business',
      blue: this.iconstring == 'schedule',
      green: this.iconstring == 'trending_up',
    };
  }
}
