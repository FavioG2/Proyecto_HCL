import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

import { VerHclPage } from '../../../pages/index.paginas'

/**
 * Generated class for the IdentificacionGeneralPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-identificacion-general',
  templateUrl: 'identificacion-general.html',
})
export class IdentificacionGeneralPage extends VerHclPage{

  ionViewDidLoad() {
    console.log('ionViewDidLoad IdentificacionGeneralPage');
  }
}
