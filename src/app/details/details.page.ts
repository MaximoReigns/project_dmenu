import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage {

  constructor(private modalCtrl: ModalController) { }
  dismissModal(){
    this.modalCtrl.dismiss();
  }
}
