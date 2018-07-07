import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';

import { RegistroPacientePage, ElegirPacientePage, DiaroGeneralPage } from "../index.paginas";

import { VariablesProvider } from "../../providers/variables/variables";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
              public auth : AuthProvider,
              public vars : VariablesProvider) {
  }

  cerrarSesion(){
    this.auth.logout();
  }

  ir_a_registro(){
    this.vars.paciente = {
      nombre : '',
      fecha_nac : '',
      edad : null,
      url_img : '',
      motivo : '',
      usuario :  '',
      key :  ''
      };
      this.vars.paciente.url_img =  'https://www.newfieldconsulting.com/wp-content/uploads/2014/07/perfil.jpg';
      this.vars.paciente.usuario = this.vars.email;
      this.vars.paciente.key = JSON.stringify(Date.now());
      this.navCtrl.push(RegistroPacientePage);
  }

  ir_a_elegir(){
    this.navCtrl.push(ElegirPacientePage);
  }

  ir_a_general(){
    this.navCtrl.push(DiaroGeneralPage)
  }

}
