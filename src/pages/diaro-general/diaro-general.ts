import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { VariablesProvider } from '../../providers/variables/variables';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

import { EntradaPage } from "../../pages/index.paginas";

import { entrada } from "../../pages/clases/entrada";

/**
 * Generated class for the DiaroGeneralPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-diaro-general',
  templateUrl: 'diaro-general.html',
})
export class DiaroGeneralPage {

  diarioCollection: AngularFirestoreCollection<any>; //Firestore collection
  entradas: Observable<any[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private afs: AngularFirestore,
              private vars : VariablesProvider) {
    this.cargar_entradas();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DiaroGeneralPage');
  }

  cargar_entradas(){
    this.diarioCollection = this.afs.collection('diario', ref => ref.where('email', '==', this.vars.email)/* , ref => ref.where('nombre', '==', 'favio')/**/);
    this.entradas = this.diarioCollection.valueChanges();
  }

  modificar(entrada:entrada){
    this.vars.entrada = entrada;
    this.navCtrl.push(EntradaPage);
  }

}
