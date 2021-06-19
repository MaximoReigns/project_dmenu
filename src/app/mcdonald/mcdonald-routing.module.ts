import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { McdonaldPage } from './mcdonald.page';

const routes: Routes = [
  {
    path: '',
    component: McdonaldPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class McdonaldPageRoutingModule {}
