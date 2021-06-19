import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HamburguesaPolloPage } from './hamburguesa-pollo.page';

const routes: Routes = [
  {
    path: '',
    component: HamburguesaPolloPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HamburguesaPolloPageRoutingModule {}
