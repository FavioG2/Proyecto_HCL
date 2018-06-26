import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

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
              private afs: AngularFirestore)
  {
    this.itemsCollection = this.afs.collection('pacientes'/* , ref => ref.where('nombre', '==', 'favio')/**/)//ref()
    this.posts = this.itemsCollection.valueChanges()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ElegirPacientePage');
  }

}
