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

  entry:entrada = null;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public vars : VariablesProvider,
              private almacenar : AlmacenarProvider) {
    //
    this.entry = this.vars.entrada;
  }

  volver(){
    this.navCtrl.pop();
  }

  guardar(){
    if ( this.entry.dia != '' && this.entry.hora != '' && this.entry.actividades != ''){

      this.entry.paciente = this.vars.paciente.nombre;
      this.entry.paciente_key = this.vars.paciente.key;
      this.entry.email = this.vars.email;
      this.almacenar.guardar('diario', this.entry, this.entry.key);
      this.volver();
    }else{
      this.almacenar.showAlert("error", "debes llenar todos los campos");
    }

  }

  eliminar(){
    this.almacenar.eliminar('diario', this.vars.entrada.key);
    this.volver();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EntradaPage');
  }

}
