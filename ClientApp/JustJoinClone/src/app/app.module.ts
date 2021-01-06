import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MapComponent } from './components/map/map.component';
import { OffersListComponent } from './components/offers-list/offers-list.component';
import { OfferComponent } from './components/offer/offer.component';
import { OfferDetailsComponent } from './components/offer-details/offer-details.component';
import { OffersPageComponent } from './components/offers-page/offers-page.component';
import { OffersFilterComponent } from './components/offers-filter/offers-filter.component';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { OfferDetailsInfoComponent } from './components/offer-details-info/offer-details-info.component';
import { OfferDetailsApplyComponent } from './components/offer-details-apply/offer-details-apply.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NgxMatFileInputModule } from '@angular-material-components/file-input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { OfferDetailsSkillsComponent } from './components/offer-details-skills/offer-details-skills.component';
import { SkillComponent } from './components/skill/skill.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MapComponent,
    OffersListComponent,
    OfferComponent,
    OfferDetailsComponent,
    OffersPageComponent,
    OffersFilterComponent,
    OfferDetailsInfoComponent,
    OfferDetailsApplyComponent,
    OfferDetailsSkillsComponent,
    SkillComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatSidenavModule,
    MatCardModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    NgxMatFileInputModule,
    MatCheckboxModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
