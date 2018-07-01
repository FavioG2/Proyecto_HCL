import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { VariablesProvider } from '../../providers/variables/variables';
import { AlmacenarProvider } from "../../providers/almacenar/almacenar";

import {  perfil } from  '../../pages/clases/perfil';

/**
 * Generated class for the PerfilCasoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-perfil-caso',
  templateUrl: 'perfil-caso.html',
})
export class PerfilCasoPage {

  public pc:perfil;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public vars: VariablesProvider,
              public almacenar : AlmacenarProvider
  ) {
    this.pc = this.vars.pc;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerfilCasoPage');
  }

  public guardar_pc(){
    this.almacenar.guardar('perfilcaso', this.pc, this.pc.key);
  }

  public salir(){
    this.navCtrl.pop();
  }

}
