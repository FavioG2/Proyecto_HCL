import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

import { VariablesProvider } from '../../providers/variables/variables';

import { CalcularEnfPage, ResultadoEnfPage, GraficoPage } from "../../pages/index.paginas";

import { enf } from '../../pages/clases/enf';

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

  enfCollection: AngularFirestoreCollection<any>; //Firestore collection
  enfs: Observable<any[]>;
  boton:boolean = false;
  constructor(public navCtrl: NavController, public navParams: NavParams, private afs: AngularFirestore,
              private vars : VariablesProvider) {
    this.cargar_enfs();
  }

  graficar(){
    this.boton = true;
    this.vars.fechas = new Array<string>();
    this.vars.notas = new Array<number>();
    this.enfCollection.valueChanges().subscribe(value => {
  //console.log(value);
      if(this.boton){
          value.forEach( (valor:enf) => {
            let obj:enf = valor;
              this.vars.fechas.push(obj.fecha + " " + obj.padre);
              this.vars.notas.push(obj.total);
            //  console.log(this.objetos.length.toString());
          });

            if(this.boton){
              console.log(this.vars.fechas.length);
              this.navCtrl.push(GraficoPage);
            }
            this.boton = false;
        }
    });


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EnfPage');
  }

  cargar_enfs(){
    this.enfCollection = this.afs.collection('enf', ref => ref.where('paciente', '==', this.vars.paciente.key)/* , ref => ref.where('nombre', '==', 'favio')/**/);
    this.enfs = this.enfCollection.valueChanges();
  }

  calcular(){
    this.navCtrl.push(CalcularEnfPage);
  }

  abrir(enf:enf){
    this.vars.enf = enf;
    this.navCtrl.push(ResultadoEnfPage);
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
