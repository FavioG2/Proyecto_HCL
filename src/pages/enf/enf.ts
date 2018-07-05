import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

import { VariablesProvider } from '../../providers/variables/variables';

import { CalcularEnfPage, ResultadoEnfPage } from "../../pages/index.paginas";

import { enf } from '../../pages/clases/enf';

/**
 * Generated class for the EnfPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-enf',
  templateUrl: 'enf.html',
})
export class EnfPage {

  enfCollection: AngularFirestoreCollection<any>; //Firestore collection
  enfs: Observable<any[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private afs: AngularFirestore,
              private vars : VariablesProvider) {
    this.cargar_enfs();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EnfPage');
  }

  cargar_enfs(){
    this.enfCollection = this.afs.collection('enf', ref => ref.where('paciente', '==', this.vars.paciente.key)/* , ref => ref.where('nombre', '==', 'favio')/**/);
    this.enfs = this.enfCollection.valueChanges();
  }

  calcular(){
    this.navCtrl.push(CalcularEnfPage);
  }

  abrir(enf:enf){
    this.vars.enf = enf;
    this.navCtrl.push(ResultadoEnfPage);
  }

}
