import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';

import { RegistroPacientePage, ElegirPacientePage } from "../index.paginas";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
              public auth : AuthProvider) {

  }

  cerrarSesion(){
    this.auth.logout();
  }

  ir_a_registro(){
    this.navCtrl.push(RegistroPacientePage);
  }

  ir_a_elegir(){
    this.navCtrl.push(ElegirPacientePage);
  }

}
