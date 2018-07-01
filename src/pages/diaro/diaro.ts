import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VariablesProvider } from '../../providers/variables/variables';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

import { EntradaPage } from "../../pages/index.paginas";

/**
 * Generated class for the DiaroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-diaro',
  templateUrl: 'diaro.html',
})
export class DiaroPage {

  diarioCollection: AngularFirestoreCollection<any>; //Firestore collection
  entradas: Observable<any[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams,
                private vars : VariablesProvider, private afs: AngularFirestore) {
                  this.cargar_entradas();
  }

  cargar_entradas(){
    this.diarioCollection = this.afs.collection('diario', ref => ref.where('paciente_key', '==', this.vars.paciente.key)/* , ref => ref.where('nombre', '==', 'favio')/**/);
    this.entradas = this.diarioCollection.valueChanges();
  }

  agregar_entrada(){
    this.navCtrl.push(EntradaPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DiaroPage');
  }

}
