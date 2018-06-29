import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { VerHclPage } from '../../../pages/index.paginas';

@IonicPage()
@Component({
  selector: 'page-antecedentes-madre',
  templateUrl: 'antecedentes-madre.html',
})
export class AntecedentesMadrePage extends VerHclPage {

  ionViewDidLoad() {
    console.log('ionViewDidLoad AntecedentesMadrePage');
  }

}
