import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

import { VariablesProvider } from  "../../providers/variables/variables"

import { ImagePicker, ImagePickerOptions } from '@ionic-native/image-picker';
import { Camera, CameraOptions } from '@ionic-native/camera';
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

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private viewCtrl : ViewController, private vars : VariablesProvider,
              private imagePicker: ImagePicker, private camera: Camera) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SubirPage');
  }

  cerrar_modal(){
    this.viewCtrl.dismiss();
  }

  mostrar_camara(){
    const options: CameraOptions = {
      quality: 30,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64 (DATA_URL):
     this.imagenPreview = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
     // Handle error
     console.log("error " + JSON.stringify(err));
    });
  }

  seleccionar_foto(){

    let options:ImagePickerOptions = {
      quality:50,
      outputType: 1,
      maximumImagesCount : 1

    }
    this.imagePicker.getPictures(options).then((results) => {
      for (var i = 0; i < results.length; i++) {
          console.log('Image URI: ' + results[i]);

          this.imagenPreview = '  data:image/jpeg;base64,' + results[i];
      }
    }, (err) => {
      console.log("Error en selector", JSON.stringify(err))
    });

  }

}
