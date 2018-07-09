import { Injectable } from '@angular/core';
import { ToastController, AlertController } from 'ionic-angular';

import {VariablesProvider } from '../variables/variables'

import * as firebase from 'firebase';

@Injectable()
export class CargaArchivoProvider {

  constructor(public toastCtrl: ToastController, public alertCtrl : AlertController,
              private vars : VariablesProvider) {
  }

  cargar_imagen_firebase( archivo:archivoSubir ){

    let promesa = new Promise((resolve, reject)=> {
      this.mostrar_toast("Cargando...");

      let storeRef = firebase.storage().ref();
      let nombreArchivo:string = new Date().valueOf().toString();

      //tarea firebase para subir el archivo
      let uploadTask: firebase.storage.UploadTask =
          storeRef.child(`img/${nombreArchivo}`)
                  .putString( archivo.img, 'base64', { contentType: 'image/jpeg'} );

          uploadTask.on( firebase.storage.TaskEvent.STATE_CHANGED,
            ()=>{}, //saber porcentaje de Mbs se ha subido
            ( error )=> {
              //manejo de error
              console.log("error en la carga");
              console.log(JSON.stringify(error));
              this.mostrar_toast(JSON.stringify( error ));
              reject();
            },
            ()=>{
              //todo bien
              console.log("archivo subido");
              this.mostrar_toast("imagen cargada correctamente");

              let url = uploadTask.snapshot.downloadURL;

              resolve(nombreArchivo);
            }
          )

    })

    return promesa;
  }

  carga_url(nombre:string){
      let storeRef = firebase.storage().ref();
      let storeRef2 = storeRef.child('img/'+nombre);

      return storeRef2.getDownloadURL().then(function(url) {
           return url;
        }).catch(function(error) {
            // Handle any errors
        });

  }

  public getVenueImage(image: string){
    this.showAlert("oye", "estamos buscando tu url");
   let imgUrl: string;
   try{
     firebase.storage().ref().child("img/" + image ).getDownloadURL().then(function(url){
       this.showAlert("atencion", url);
       return url;
     });
   }
   catch(e){
     this.showAlert("atencion", JSON.stringify(e));
     console.log(e);
   }
}

  mostrar_toast( mensaje:string){
    this.toastCtrl.create({
      message: mensaje,
      duration: 2000
    }).present();
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

interface archivoSubir{
  titulo:string;
  img:string;
  key?:string;
}
