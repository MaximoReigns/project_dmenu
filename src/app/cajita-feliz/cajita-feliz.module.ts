import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CajitaFelizPageRoutingModule } from './cajita-feliz-routing.module';

import { CajitaFelizPage } from './cajita-feliz.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CajitaFelizPageRoutingModule
  ],
  declarations: [CajitaFelizPage]
})
export class CajitaFelizPageModule {}
