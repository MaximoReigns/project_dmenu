import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { McdonaldPageRoutingModule } from './mcdonald-routing.module';

import { McdonaldPage } from './mcdonald.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    McdonaldPageRoutingModule
  ],
  declarations: [McdonaldPage]
})
export class McdonaldPageModule {}
