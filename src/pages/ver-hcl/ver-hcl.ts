import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

import { VariablesProvider } from '../../providers/variables/variables';
import { AlmacenarProvider } from "../../providers/almacenar/almacenar";

import {  hcl } from  '../../pages/clases/hcl';

import { IdentificacionGeneralPage } from '../../pages/index.paginas';

/**
 * Generated class for the VerHclPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ver-hcl',
  templateUrl: 'ver-hcl.html',
})
export class VerHclPage {

  public hcl:hcl;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public vars: VariablesProvider,
              public almacenar : AlmacenarProvider,
              public modalCtrl : ModalController) {
    this.hcl = vars.hcl;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VerHclPage');
  }

  public guardar_hcl(){
    this.almacenar.guardar('hcl', this.hcl, this.hcl.key);
  }

  identificacion_general(){
    this.modalCtrl.create(IdentificacionGeneralPage).present();

  }



}
