import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

import { VariablesProvider } from '../../providers/variables/variables';

import { paciente } from "../../pages/clases/pacientes"

import { PacientePage } from "../../pages/index.paginas";

/**
 * Generated class for the ElegirPacientePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-elegir-paciente',
  templateUrl: 'elegir-paciente.html',
})
export class ElegirPacientePage {

  itemsCollection: AngularFirestoreCollection<any>; //Firestore collection
  posts: Observable<any[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private afs: AngularFirestore,
              private vars: VariablesProvider)
  {
    this.itemsCollection = this.afs.collection('pacientes', ref => ref.where('usuario', '==', this.vars.email)/* , ref => ref.where('nombre', '==', 'favio')/**/)//ref()
    this.posts = this.itemsCollection.valueChanges()

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ElegirPacientePage');
  }

  imprimir(paciente:paciente){
    this.vars.paciente = paciente;
    this.navCtrl.pop();
    this.navCtrl.push(PacientePage);
  }

}
