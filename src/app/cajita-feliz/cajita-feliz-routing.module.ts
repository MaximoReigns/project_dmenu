import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CajitaFelizPage } from './cajita-feliz.page';

const routes: Routes = [
  {
    path: '',
    component: CajitaFelizPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CajitaFelizPageRoutingModule {}
