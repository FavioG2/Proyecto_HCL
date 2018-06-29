import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { VerHclPage } from '../../pages/index.paginas';

@IonicPage()
@Component({
  selector: 'page-historia-escolar',
  templateUrl: 'historia-escolar.html',
})

export class HistoriaEscolarPage extends VerHclPage{

  ionViewDidLoad() {
    console.log('ionViewDidLoad HistoriaEscolarPage');
  }

}
