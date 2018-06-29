import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


import { VerHclPage } from '../../pages/index.paginas'
/**
 * Generated class for the MotivoConsultaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-motivo-consulta',
  templateUrl: 'motivo-consulta.html',
})
export class MotivoConsultaPage extends VerHclPage {

  ionViewDidLoad() {
    console.log('ionViewDidLoad MotivoConsultaPage');
  }

}
