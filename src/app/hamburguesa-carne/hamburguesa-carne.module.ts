import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HamburguesaCarnePageRoutingModule } from './hamburguesa-carne-routing.module';

import { HamburguesaCarnePage } from './hamburguesa-carne.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HamburguesaCarnePageRoutingModule
  ],
  declarations: [HamburguesaCarnePage]
})
export class HamburguesaCarnePageModule {}
