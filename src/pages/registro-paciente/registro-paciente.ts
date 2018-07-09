import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController, ModalController} from 'ionic-angular';


import { VariablesProvider } from '../../providers/variables/variables';
import { AlmacenarProvider } from "../../providers/almacenar/almacenar";
import { CargaArchivoProvider } from "../../providers/carga-archivo/carga-archivo";

import { paciente } from "../../pages/clases/pacientes"


import { PacientePage, SubirPage } from "../../pages/index.paginas";

@IonicPage()
@Component({
  selector: 'page-registro-paciente',
  templateUrl: 'registro-paciente.html',
})
export class RegistroPacientePage {



  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public vars : VariablesProvider,
              private almacenar : AlmacenarProvider,
              public loadingCtrl: LoadingController,
              public alertCtrl : AlertController,
              private modalCtlr : ModalController,
              public carga : CargaArchivoProvider ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistroPacientePage');
  }

  atras(){
    this.navCtrl.pop();
  }

    paciente: paciente = this.vars.paciente;

  registrar(){

    if ( this.paciente.nombre != '' && this.paciente.fecha_nac != ''
        && this.paciente.edad != null && this.paciente.motivo != ''){
      this.almacenar.guardar('pacientes', this.paciente, this.paciente.key);
      this.presentLoadingDefault('Almacenando información');
      this.navCtrl.pop();
      if(this.navCtrl.length()<3){
        this.navCtrl.push(PacientePage);
      }
    } else {
      this.almacenar.showAlert("error", "debes llenar todos los campos");
    }
  }

  eliminar(){
    let alert = this.alertCtrl.create({
        title: 'Eliminar paciente',
        message: 'Estás seguro de querer eliminar a ' + this.vars.paciente.nombre +'?',
        buttons: [
            {
                text: 'No',
                handler: () => {
                    console.log('Cancelado');
                }
            },
            {
                text: 'Si',
                handler: () => {
                  this.almacenar.eliminar('pacientes', this.vars.paciente.key);
                  if(this.navCtrl.length()>=3){
                    this.navCtrl.pop();
                  }
                  this.navCtrl.pop();
                }
            }
        ]
    })
    alert.present();



  }

  mostrar_modal(){
    let modal = this.modalCtlr.create(SubirPage);
    modal.present();

  }

  presentLoadingDefault(contenido: string) {
    let loading = this.loadingCtrl.create({
      content: contenido
    });

    loading.present();

    setTimeout(() => {
      loading.dismiss();
    }, 2000);
}



}
