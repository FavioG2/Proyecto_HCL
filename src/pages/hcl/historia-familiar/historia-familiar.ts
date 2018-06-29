import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { VerHclPage } from '../../../pages/index.paginas'


@IonicPage()
@Component({
  selector: 'page-historia-familiar',
  templateUrl: 'historia-familiar.html',
})
export class HistoriaFamiliarPage extends VerHclPage{

  ionViewDidLoad() {
    console.log('ionViewDidLoad HistoriaFamiliarPage');
  }

}
