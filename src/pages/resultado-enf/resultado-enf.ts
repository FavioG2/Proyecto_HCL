import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VariablesProvider } from '../../providers/variables/variables';

import { enf } from "../../pages/clases/enf";

@IonicPage()
@Component({
  selector: 'page-resultado-enf',
  templateUrl: 'resultado-enf.html',
})
export class ResultadoEnfPage {

  enf:enf;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public vars : VariablesProvider)
  {
    this.enf = this.vars.enf;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResultadoEnfPage');
  }

  color(indice:string){
    if(indice == "bajo"){
      return("#50EA1A");
    }
    else if(indice == "medio"){
      return("#F4F711");
    }
    else if(indice == "alto"){
      return("#FF4D19");
    }
  }

  icono(indice:string){
    if(indice == "bajo"){
      return("checkmark-circle");
    }
    else if(indice == "medio"){
      return("alert");
    }
    else if(indice == "alto"){
      return("close-circle");
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
