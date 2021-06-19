import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HamburguesaPolloPageRoutingModule } from './hamburguesa-pollo-routing.module';

import { HamburguesaPolloPage } from './hamburguesa-pollo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HamburguesaPolloPageRoutingModule
  ],
  declarations: [HamburguesaPolloPage]
})
export class HamburguesaPolloPageModule {}
