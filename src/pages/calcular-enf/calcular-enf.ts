import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { enf } from '../../pages/clases/enf';
import { VariablesProvider } from '../../providers/variables/variables';

/**
 * Generated class for the CalcularEnfPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-calcular-enf',
  templateUrl: 'calcular-enf.html',
})
export class CalcularEnfPage {

  enf:enf = {
    key:'',
    email:'',
    paciente:'',
    fecha:'',
    informacion_propia:null,
    informacion_otros:null,
    apoyo_emocional:null,
    recursos_comunitarios:null,
    recursos_economicos:null,
    tiempo:null,
    funcionamiento_familiar:null,
    total:null
  }

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public vars : VariablesProvider ) {
    this.enf.key = JSON.stringify(Date.now());
    this.enf.email = vars.email;
    this.enf.paciente = vars.paciente.key;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CalcularEnfPage');
  }

}
