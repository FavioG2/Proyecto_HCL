import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { CalcularEnfPage } from "../../pages/index.paginas";

/**
 * Generated class for the EnfPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-enf',
  templateUrl: 'enf.html',
})
export class EnfPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EnfPage');
  }

  calcular(){
    this.navCtrl.push(CalcularEnfPage);
  }

}
