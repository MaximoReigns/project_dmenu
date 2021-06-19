import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CasadelosabuelosPageRoutingModule } from './casadelosabuelos-routing.module';

import { CasadelosabuelosPage } from './casadelosabuelos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CasadelosabuelosPageRoutingModule
  ],
  declarations: [CasadelosabuelosPage]
})
export class CasadelosabuelosPageModule {}
