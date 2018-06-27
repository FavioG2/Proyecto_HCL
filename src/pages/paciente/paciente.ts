import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { VariablesProvider } from '../../providers/variables/variables';
import { hcl } from '../../pages/clases/hcl'

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

import { VerHclPage } from "../../pages/index.paginas";
/**
 * Generated class for the PacientePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-paciente',
  templateUrl: 'paciente.html',
})
export class PacientePage {
//historias clinicas
  hclCollection: AngularFirestoreCollection<any>; //Firestore collection
  hcls: Observable<any[]>;
  //hcl_paciente:hcl = new hcl();
  //area de hcl
  existe_hcl:boolean = false;
  texto_boton_hcl:string = "crear historia clínica";

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private vars : VariablesProvider, private afs: AngularFirestore)
  {
    this.cargar_hcl();
    this.vars.hcl = new hcl();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PacientePage');
  }

  cargar_hcl(){
      this.hclCollection = this.afs.collection('hcl', ref => ref.where('clave', '==', this.vars.paciente.key));
      this.hclCollection.valueChanges().subscribe( value => {
        //primero verificamos si ya existe una historia clinica
        if(value.length > 0){
          this.texto_boton_hcl = "revisar o editar historia clínica"
          this.existe_hcl = true;
          let hcl:hcl = value[0];
          this.vars.hcl = hcl;
        }else{
          this.vars.hcl.clave = this.vars.paciente.key;
          this.vars.hcl.key = JSON.stringify(Date.now());
          this.vars.hcl.nombre = this.vars.paciente.nombre;
          this.vars.hcl.edad = this.vars.paciente.edad;
          this.vars.hcl.fecha_nac = this.vars.paciente.fecha_nac;
          this.vars.hcl.motivo = this.vars.paciente.motivo;
        }
      });
  }

  abrir_hcl(){
    this.navCtrl.push(VerHclPage);
  }
}
