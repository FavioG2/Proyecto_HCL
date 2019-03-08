import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AlertController} from 'ionic-angular';

/*
  Generated class for the AlmacenarProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AlmacenarProvider {

  itemsCollection: AngularFirestoreCollection<any>; //Firestore collection
  posts: Observable<any[]>;

  constructor(private afs: AngularFirestore,
              private alertCtrl: AlertController) {
    //ref()
  }

  guardar( coleccion : string, objeto : any, key : string){
    this.itemsCollection = this.afs.collection(coleccion);
    this.itemsCollection.doc(key).set(objeto).then(
      result => {
        this.showAlert('Registro', 'Información guardada exitosamente');
      }
    ).catch(
      error => {
        this.showAlert('Error', 'verifique la información ingresada y su conexión a internet');
      }
    );
  }

  eliminar ( coleccion : string, key : string ){
    this.itemsCollection = this.afs.collection(coleccion);
    this.itemsCollection.doc(key).delete().then(
      result => {
        this.showAlert('Registro', 'Registro eliminado exitosamente');
      }
    ).catch(
      error => {
        this.showAlert('Error', 'verifique la información ingresada y su conexión a internet');
      }
    );
  }

  showAlert(title:string, subtitle:string) {
  const alert = this.alertCtrl.create({
    title: title,
    subTitle: subtitle,
    buttons: ['OK']
  });
  alert.present();
}


}
