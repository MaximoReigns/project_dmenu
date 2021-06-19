import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DetailsPage } from '../details/details.page';

@Component({
  selector: 'app-mcdonald',
  templateUrl: './mcdonald.page.html',
  styleUrls: ['./mcdonald.page.scss'],
})
export class McdonaldPage {

  constructor(private modalCtrl: ModalController) { }
  ionViewDidEnter(){
    console.log('ionViewDidEnter DMENU');
  }

  async openModal(){
    const modal = await this.modalCtrl.create({
      component: DetailsPage
    });
    await modal.present();
  }

  /*changeView(){

  }*/
}
