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

  items = ['Hamburguesa Normal', 'Hamburguesa Mc Pollo', 'Cajita Feliz', ];

  normal = [
    {
      imglogo: "../../assets/static/logo.png",
      imgLogoFood: "../../assets/static/logo macd.png",
      category: "Comida",
      nameHamburger: "Hamburguesa Normal",
    }
  ]

  chicken = [
    {
      imgLogoFood: "../../assets/static/hamburgesa pollo.png",
      nameHamburger: "Hamburguesa Mc Pollo",
    }
  ]

  happy = [
    {
      imgLogoFood: "../../assets/static/cajita feliz.png",
      nameHamburger: "Cajita Feliz",
    }
  ]

  constructor(private modalCtrl: ModalController, private router: Router ) { }
  ionViewDidEnter(){
    console.log('ionViewDidEnter DMENU');
  }

  addItemNormal(){
    this.items.push('¡Hamburguesa Normal Agregada Exitosamente!');
  }

  addItemChicken(){
    this.items.push('¡Hamburguesa Mc Pollo Agregada Exitosamente!');
  }

  addItemHappy(){
    this.items.push('¡Cajita Feliz Agregada Exitosamente!');
  }

  deleteItems(index: number){
    this.items.splice(index, 1);
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