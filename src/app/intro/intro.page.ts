import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage {

  constructor() {}
  datas = [
    {
      imgApp: "../../assets/static/logo.png",
      login: "Ingresar",
      register: "Registrarse"
    }
  ]
}
