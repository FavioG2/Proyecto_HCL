import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { VariablesProvider } from '../../providers/variables/variables';
import { AlmacenarProvider } from "../../providers/almacenar/almacenar";

import {  hcl } from  '../../pages/clases/hcl';

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

  hcl:hcl;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public vars: VariablesProvider,
              private almacenar : AlmacenarProvider) {
    this.hcl = vars.hcl.hcl;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VerHclPage');
  }

  guardar_hcl(){
    this.almacenar.guardar('hcl', this.hcl, this.hcl.key);
  }

}
