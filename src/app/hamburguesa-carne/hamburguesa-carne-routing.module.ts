import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HamburguesaCarnePage } from './hamburguesa-carne.page';

const routes: Routes = [
  {
    path: '',
    component: HamburguesaCarnePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HamburguesaCarnePageRoutingModule {}
