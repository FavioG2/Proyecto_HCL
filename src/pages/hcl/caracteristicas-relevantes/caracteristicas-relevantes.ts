import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';


import { VerHclPage } from '../../../pages/index.paginas';
@IonicPage()
@Component({
  selector: 'page-caracteristicas-relevantes',
  templateUrl: 'caracteristicas-relevantes.html',
})
export class CaracteristicasRelevantesPage extends VerHclPage {

  ionViewDidLoad() {
    console.log('ionViewDidLoad CaracteristicasRelevantesPage');
  }

}
