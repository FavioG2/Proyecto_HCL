import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';


import { VariablesProvider } from '../../providers/variables/variables';
import { AlmacenarProvider } from "../../providers/almacenar/almacenar";

@IonicPage()
@Component({
  selector: 'page-registro-paciente',
  templateUrl: 'registro-paciente.html',
})
export class RegistroPacientePage {

  paciente = {
    nombre : '',
    fecha_nac : '',
    edad : '',
    url_img : '',
    motivo : '',
    usuario : '',
    key : ''
  }

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

  registrar(){
    console.log("hola " + this.vars.email);
    this.paciente.url_img =  'https://www.newfieldconsulting.com/wp-content/uploads/2014/07/perfil.jpg';
    this.paciente.usuario = this.vars.email;
    this.paciente.key = JSON.stringify(Date.now());
    this.almacenar.guardar('pacientes', this.paciente, this.paciente.key);
    this.vars.paciente = this.paciente.key;
    this.presentLoadingDefault('Almacenando información');
    this.atras();
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
