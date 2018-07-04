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

  resp:respuestas = {
    i1:null,
    i2:null,
    i3:null,
    i4:null,
    i5:null,
    i6:null,
    i7:null,
    io1:null,
    io2:null,
    io3:null,
    io4:null,
    io5:null,
    a1:null,
    a2:null,
    a3:null,
    a4:null,
    a5:null,
    a6:null,
    r1:null,
    r2:null,
    r3:null,
    r4:null,
    re1:null,
    re2:null,
    re3:null,
    re4:null,
    re5:null,
    re6:null,
    t1:null,
    t2:null,
    t3:null,
    t4:null,
    f1:null,
    f2:null,
    f3:null,
    f4:null
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

class respuestas{
  i1:number;
  i2:number;
  i3:number;
  i4:number;
  i5:number;
  i6:number;
  i7:number;
  io1:number;
  io2:number;
  io3:number;
  io4:number;
  io5:number;
  a1:number;
  a2:number;
  a3:number;
  a4:number;
  a5:number;
  a6:number;
  r1:number;
  r2:number;
  r3:number;
  r4:number;
  re1:number;
  re2:number;
  re3:number;
  re4:number;
  re5:number;
  re6:number;
  t1:number;
  t2:number;
  t3:number;
  t4:number;
  f1:number;
  f2:number;
  f3:number;
  f4:number;
}
