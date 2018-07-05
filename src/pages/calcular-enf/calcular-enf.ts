import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { enf } from '../../pages/clases/enf';
import { VariablesProvider } from '../../providers/variables/variables';
import { AlmacenarProvider} from '../../providers/almacenar/almacenar';

import { ResultadoEnfPage } from '../../pages/index.paginas';

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

  registrado:boolean = false;

  enf:enf = {
    key:'',
    email:'',
    paciente:'',
    fecha:'',
    padre:'',
    informacion_propia:4,
    informacion_otros:4,
    apoyo_emocional:4,
    recursos_comunitarios:4,
    recursos_economicos:4,
    tiempo:4,
    funcionamiento_familiar:4,
    total:4
  }

  resp:respuestas = {
    i1:4,
    i2:4,
    i3:4,
    i4:4,
    i5:4,
    i6:4,
    i7:4,
    io1:4,
    io2:4,
    io3:4,
    io4:4,
    io5:4,
    a1:4,
    a2:4,
    a3:4,
    a4:4,
    a5:4,
    a6:4,
    r1:4,
    r2:4,
    r3:4,
    r4:4,
    re1:4,
    re2:4,
    re3:4,
    re4:4,
    re5:4,
    re6:4,
    t1:4,
    t2:4,
    t3:4,
    t4:4,
    f1:4,
    f2:4,
    f3:4,
    f4:4
  }

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public vars : VariablesProvider,
              public almacenar : AlmacenarProvider) {
    this.enf.key = JSON.stringify(Date.now());
    this.enf.email = vars.email;
    this.enf.paciente = vars.paciente.key;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CalcularEnfPage');
  }

  calcular(){

    if(
      this.enf.padre == '' ||
      this.enf.fecha == '' ||
      this.resp.i1 == 4 ||
      this.resp.i2 == 4 ||
      this.resp.i3 == 4 ||
      this.resp.i4 == 4 ||
      this.resp.i5 == 4 ||
      this.resp.i6 == 4 ||
      this.resp.i7 == 4 ||
      this.resp.io1 == 4 ||
      this.resp.io2 == 4 ||
      this.resp.io3 == 4 ||
      this.resp.io4 == 4 ||
      this.resp.io5 == 4 ||
      this.resp.a1 == 4 ||
      this.resp.a2 == 4 ||
      this.resp.a3 == 4 ||
      this.resp.a4 == 4 ||
      this.resp.a5 == 4 ||
      this.resp.a6 == 4 ||
      this.resp.r1 == 4 ||
      this.resp.r2 == 4 ||
      this.resp.r3 == 4 ||
      this.resp.r4 == 4 ||
      this.resp.re1 == 4 ||
      this.resp.re2 == 4 ||
      this.resp.re3 == 4 ||
      this.resp.re4 == 4 ||
      this.resp.re5 == 4 ||
      this.resp.re6 == 4 ||
      this.resp.t1 == 4 ||
      this.resp.t2 == 4 ||
      this.resp.t3 == 4 ||
      this.resp.t4 == 4 ||
      this.resp.f1 == 4 ||
      this.resp.f2 == 4 ||
      this.resp.f3 == 4 ||
      this.resp.f4 == 4
    ){
      this.almacenar.showAlert("Error", "Por favor complete el formulario antes de realizar el cálculo");
    }
    else {
      this.registrado = true;
      this.enf.informacion_propia = Number(this.resp.i1) + Number(this.resp.i2) + Number(this.resp.i3) + Number(this.resp.i4) + Number(this.resp.i5) + Number(this.resp.i6) + Number(this.resp.i7);
      this.enf.informacion_otros = Number(this.resp.io1) + Number(this.resp.io2) + Number(this.resp.io3) + Number(this.resp.io4) + Number(this.resp.io5);
      this.enf.apoyo_emocional = Number(this.resp.a1) + Number(this.resp.a2) + Number(this.resp.a3) + Number(this.resp.a4) + Number(this.resp.a5) + Number(this.resp.a6);
      this.enf.recursos_comunitarios = Number(this.resp.r1) +  Number(this.resp.r2) +  Number(this.resp.r3) +  Number(this.resp.r4);
      this.enf.recursos_economicos = Number(this.resp.re1) + Number(this.resp.re2) + Number(this.resp.re3) + Number(this.resp.re4) + Number(this.resp.re5) + Number(this.resp.re6);
      this.enf.tiempo = Number(this.resp.t1) + Number(this.resp.t2) + Number(this.resp.t3) + Number(this.resp.t4);
      this.enf.funcionamiento_familiar = Number(this.resp.f1) + Number(this.resp.f2) + Number(this.resp.f3) + Number(this.resp.f4);
      this.enf.total = this.enf.informacion_propia + this.enf.informacion_otros + this.enf.apoyo_emocional
                      + this.enf.recursos_economicos + this.enf.recursos_comunitarios + this.enf.tiempo + this.enf.funcionamiento_familiar;

      console.log(this.enf.total);
      this.vars.enf = this.enf;
      this.almacenar.guardar('enf', this.enf, this.enf.key);
      this.navCtrl.pop();
      this.navCtrl.push(ResultadoEnfPage);
    }

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
