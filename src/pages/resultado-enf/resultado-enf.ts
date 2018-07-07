import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { VariablesProvider } from '../../providers/variables/variables';
import { AlmacenarProvider } from '../../providers/almacenar/almacenar';
import { enf } from "../../pages/clases/enf";

@IonicPage()
@Component({
  selector: 'page-resultado-enf',
  templateUrl: 'resultado-enf.html',
})
export class ResultadoEnfPage {

  enf:enf;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public vars : VariablesProvider, public almacenar : AlmacenarProvider,
              public alertCtrl : AlertController)
  {
    this.enf = this.vars.enf;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResultadoEnfPage');
  }

  eliminar(){
    let alert = this.alertCtrl.create({
        title: 'Eliminar ENF',
        message: 'Estás seguro de que deseas eliminar este cálculo de ENF?',
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
                  this.almacenar.eliminar('enf', this.enf.key);
                  this.navCtrl.pop();
                }
            }
        ]
    })
  }

  color(indice:string){
    if(indice == "bajo"){
      return("verde");
    }
    else if(indice == "medio"){
      return("amarillo");
    }
    else if(indice == "alto"){
      return("rojo");
    }
  }

  icono(indice:string){
    if(indice == "bajo"){
      return("./assets/imgs/bajo.png");
    }
    else if(indice == "medio"){
      return("./assets/imgs/medio.png");
    }
    else if(indice == "alto"){
      return("./assets/imgs/alto.png");
    }
  }

  informacion_propia(nota:number){
    if(nota < 5){
      return "bajo";
    }else if(nota < 11){
      return "medio";
    }else if(nota < 15){
      return "alto";
    }
  }
  informacion_otros(nota:number){
    if(nota < 4){
      return "bajo";
    }else if(nota < 8){
      return "medio";
    }else if(nota < 11){
      return "alto";
    }
  }

  apoyo_emocional(nota:number){
    if(nota < 4){
      return "bajo";
    }else if(nota < 9){
      return "medio";
    }else if(nota < 13){
      return "alto";
    }
  }

  recursos_comunitarios(nota:number){
    if(nota < 3){
      return "bajo";
    }else if(nota < 6){
      return "medio";
    }else if(nota < 9){
      return "alto";
    }
  }

  recursos_economicos(nota:number){
    if(nota < 4){
      return "bajo";
    }else if(nota < 9){
      return "medio";
    }else if(nota < 13){
      return "alto";
    }
  }

  tiempo(nota:number){
    if(nota < 3){
      return "bajo";
    }else if(nota < 6){
      return "medio";
    }else if(nota < 9){
      return "alto";
    }
  }
  funcionamiento_familiar(nota:number){
    if(nota < 3){
      return "bajo";
    }else if(nota < 6){
      return "medio";
    }else if(nota < 9){
      return "alto";
    }
  }
  total(nota:number){
    if(nota < 26){
      return "bajo";
    }else if(nota < 55){
      return "medio";
    }else if(nota < 73){
      return "alto";
    }
  }
}
