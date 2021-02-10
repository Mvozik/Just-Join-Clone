import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrandsPageComponent } from './components/brands-page/brands-page.component';
import { GeekPageComponent } from './components/geek-page/geek-page.component';
import { MatchmakingPageComponent } from './components/matchmaking-page/matchmaking-page.component';
import { OfferDetailsComponent } from './components/offer-details/offer-details.component';
import { OffersListComponent } from './components/offers-list/offers-list.component';
import { OffersPageComponent } from './components/offers-page/offers-page.component';

const routes: Routes = [
  {
    path: '',
    component: OffersPageComponent,
    children: [
      {
        path: '',
        component: OffersListComponent,
      },
      {
        path: 'details/:id',
        component: OfferDetailsComponent,
      },
    ],
  },
  {
    path: 'brands',
    component: BrandsPageComponent,
  },
  {
    path: 'geek',
    component: GeekPageComponent,
  },
  {
    path: 'matchmaking',
    component: MatchmakingPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
