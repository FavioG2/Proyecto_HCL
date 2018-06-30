import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

import { VerHclPage } from '../../../pages/index.paginas';

@IonicPage()
@Component({
  selector: 'page-post-natal',
  templateUrl: 'post-natal.html',
})
export class PostNatalPage extends VerHclPage {

  ionViewDidLoad() {
    console.log('ionViewDidLoad PostNatalPage');
  }

}
