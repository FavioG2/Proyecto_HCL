import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { entrada } from "../../pages/clases/entrada";

import { VariablesProvider } from '../../providers/variables/variables';
import { AlmacenarProvider } from "../../providers/almacenar/almacenar";


/**
 * Generated class for the EntradaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-entrada',
  templateUrl: 'entrada.html',
})
export class EntradaPage {

  entry:entrada = {
    dia:'',
    hora:'',
    key:'',
    actividades:'',
    paciente:'',
    paciente_key:''
  };

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public vars : VariablesProvider,
              private almacenar : AlmacenarProvider) {
    //
  }

  volver(){
    this.navCtrl.pop();
  }

  guardar(){
    if ( this.entry.dia != '' && this.entry.hora != '' && this.entry.actividades != ''){
      this.entry.key = JSON.stringify(Date.now());
      this.entry.paciente = this.vars.paciente.nombre;
      this.entry.paciente_key = this.vars.paciente.key;
      this.almacenar.guardar('diario', this.entry, this.entry.key);
      this.volver();
    }else{
      this.almacenar.showAlert("error", "debes llenar todos los campos");
    }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EntradaPage');
  }

}
