import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';

import * as firebase from 'firebase';

@Injectable()
export class CargaArchivoProvider {

  constructor(public toastCtrl: ToastController) {
  }

  cargar_imagen_firebase( archivo : ArchivoSubir){
    let promesa = new Promise( (resolve, reject) => {
      this.mostrar_toast("cargando...");

      let storeRef = firebase.storage().ref();
      let nombreArchivo:string = new Date().valueOf().toString();

      let uploadTast:firebase.storage.UploadTask =
          storeRef.child(`img/${ nombreArchivo }`)
                  .putString(archivo.img, 'base64', { contentType: 'image/jpeg' } );
      uploadTast.on( firebase.storage.TaskEvent.STATE_CHANGED,
        () => {},
        (error) => {
          console.log("Error en la carga");
          console.log(JSON.stringify(error));
          this.mostrar_toast(JSON.stringify(error));
          reject();
        },
        ()=> {
          console.log("archivo subido");
          this.mostrar_toast("imagen cargada correctamente");
          resolve();
        }
       )

    });

    return promesa;
  }

  mostrar_toast(mensaje : string ){
      const toast = this.toastCtrl.create({
      message: mensaje,
      duration: 2000
    }).present;
  }

}

interface ArchivoSubir{
  //titulo:string;
  img:string;
  key?:string;
}
