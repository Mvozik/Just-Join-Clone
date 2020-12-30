import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OffersPageComponent } from './components/offers-page/offers-page.component';

const routes: Routes = [
  {
    path: '',
    component: OffersPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
