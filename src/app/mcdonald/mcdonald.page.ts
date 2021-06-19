import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DetailsPage } from '../details/details.page';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mcdonald',
  templateUrl: './mcdonald.page.html',
  styleUrls: ['./mcdonald.page.scss'],
})
export class McdonaldPage {

  constructor(private modalCtrl: ModalController, private router: Router ) { }
  ionViewDidEnter(){
    console.log('ionViewDidEnter DMENU');
  }

  async openModal(){
    const modal = await this.modalCtrl.create({
      component: DetailsPage
    });
    await modal.present();
  }

  cajitaFeliz(){
    this.router.navigateByUrl('/cajita-feliz');
  }

  hamburguesaCarne(){
    this.router.navigateByUrl('/hamburguesa-carne');
  }

  hamburguesaPollo(){
    this.router.navigateByUrl('/hamburguesa-pollo');
  }
}