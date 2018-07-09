import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

import { VariablesProvider } from  "../../providers/variables/variables"

import { ImagePicker, ImagePickerOptions } from '@ionic-native/image-picker';
import { Camera, CameraOptions } from '@ionic-native/camera';

import { CargaArchivoProvider } from '../../providers/carga-archivo/carga-archivo'
/**
 * Generated class for the SubirPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-subir',
  templateUrl: 'subir.html',
})
export class SubirPage {

  imagenPreview:string;
  imagen64:string;
  img:boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private viewCtrl : ViewController, private vars : VariablesProvider,
              private imagePicker: ImagePicker, private camera: Camera,
              public _cap : CargaArchivoProvider ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SubirPage');
  }

  cerrar_modal(){
    this.viewCtrl.dismiss();
  }

  mostrar_camara(){
    this.img = true;
    const options: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64:
     this.imagenPreview = 'data:image/jpeg;base64,' + imageData;
     this.imagen64 = imageData;
     //this.imagen64 = imageData;

    }, (err) => {
     // Handle error
     console.log("error en camara ", JSON.stringify(err));
  });
  }

  seleccionar_foto(){
    this.img = true;
    let opciones:ImagePickerOptions = {
      quality: 70,
      outputType: 1,
      maximumImagesCount: 1
    }
    this.imagePicker.getPictures(opciones).then((results) => {
      for (var i = 0; i < results.length; i++) {
          this.imagenPreview = 'data:image/jpeg;base64,' + results[i];
          this.imagen64 = results[i];
//          this.imagen64 = results[i];
      }
    }, (err) => {
      console.log("Error en selector", JSON.stringify(err));
    });

  }

  subir_imagen(){
    console.log(this.imagen64);
    let archivo = {
      img:this.imagen64
    }

    this._cap.cargar_imagen_firebase(archivo);
  }

}
