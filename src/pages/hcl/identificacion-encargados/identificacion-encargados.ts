import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


import { VerHclPage } from '../../pages/index.paginas'


@IonicPage()
@Component({
  selector: 'page-identificacion-encargados',
  templateUrl: 'identificacion-encargados.html',
})
export class IdentificacionEncargadosPage extends VerHclPage{


  ionViewDidLoad() {
    console.log('ionViewDidLoad IdentificacionEncargadosPage');
  }

}
