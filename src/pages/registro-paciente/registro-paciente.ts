import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';


import { VariablesProvider } from '../../providers/variables/variables';
import { AlmacenarProvider } from "../../providers/almacenar/almacenar";

import { paciente } from "../../pages/clases/pacientes"

@IonicPage()
@Component({
  selector: 'page-registro-paciente',
  templateUrl: 'registro-paciente.html',
})
export class RegistroPacientePage {



  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public vars : VariablesProvider,
              private almacenar : AlmacenarProvider,
              public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistroPacientePage');
  }

  atras(){
    this.navCtrl.pop();
  }

    paciente: paciente = {
      nombre : '',
      fecha_nac : '',
      edad : null,
      url_img : '',
      motivo : '',
      usuario :  '',
      key :  ''
    };

  registrar(){
    this.paciente.url_img =  'https://www.newfieldconsulting.com/wp-content/uploads/2014/07/perfil.jpg';
    this.paciente.usuario = this.vars.email;
    this.paciente.key = JSON.stringify(Date.now());
    if ( this.paciente.nombre != '' && this.paciente.fecha_nac != ''
        && this.paciente.edad != null && this.paciente.motivo != ''){
      this.almacenar.guardar('pacientes', this.paciente, this.paciente.key);
      this.vars.paciente = this.paciente.key;
      this.presentLoadingDefault('Almacenando información');
      this.atras();
    } else {
      this.almacenar.showAlert("error", "debes llenar todos los campos");
    }
  }

  presentLoadingDefault(contenido: string) {
    let loading = this.loadingCtrl.create({
      content: contenido
    });

    loading.present();

    setTimeout(() => {
      loading.dismiss();
    }, 2000);
}



}
