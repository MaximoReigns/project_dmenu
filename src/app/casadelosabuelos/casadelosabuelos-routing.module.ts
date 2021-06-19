import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CasadelosabuelosPage } from './casadelosabuelos.page';

const routes: Routes = [
  {
    path: '',
    component: CasadelosabuelosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CasadelosabuelosPageRoutingModule {}
