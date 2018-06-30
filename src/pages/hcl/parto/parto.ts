import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { VerHclPage } from '../../../pages/index.paginas';

@IonicPage()
@Component({
  selector: 'page-parto',
  templateUrl: 'parto.html',
})
export class PartoPage extends VerHclPage{

  ionViewDidLoad() {
    console.log('ionViewDidLoad PartoPage');
  }

}
