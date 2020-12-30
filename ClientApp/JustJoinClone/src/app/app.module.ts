import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
