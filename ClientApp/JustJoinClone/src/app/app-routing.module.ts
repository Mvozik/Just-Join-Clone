import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
