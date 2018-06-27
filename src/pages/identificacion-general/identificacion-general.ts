import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

import {  hcl } from  '../../pages/clases/hcl';
import { VariablesProvider } from '../../providers/variables/variables';
import { AlmacenarProvider } from "../../providers/almacenar/almacenar";

import { VerHclPage } from '../../pages/index.paginas'

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

  end(){
    this.navCtrl.pop();
  }

}
