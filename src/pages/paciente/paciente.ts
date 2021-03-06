import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { VariablesProvider } from '../../providers/variables/variables';


import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

import { VerHclPage, DiaroPage, PerfilCasoPage, EnfPage, RegistroPacientePage } from "../../pages/index.paginas";
import { hcl } from '../../pages/clases/hcl';
import{ perfil } from '../../pages/clases/perfil';
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

  pcCollection: AngularFirestoreCollection<any>; //Firestore collection
  pcs: Observable<any[]>;
  //hcl_paciente:hcl = new hcl();
  //area de hcl
  existe_hcl:boolean = false;
  texto_boton_hcl:string = "crear historia clínica";
  texto_boton_perfil:string = "crear perfil de caso";

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private vars : VariablesProvider, private afs: AngularFirestore)
  {

    this.cargar_hcl();
    this.cargar_perfil_caso();
  }

  salir(){
    this.navCtrl.pop();
  }

  editar(){
    this.navCtrl.push(RegistroPacientePage);
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
          this.crear_hcl();
          this.vars.hcl.clave = this.vars.paciente.key;
          this.vars.hcl.key = JSON.stringify(Date.now());
          this.vars.hcl.nombre = this.vars.paciente.nombre;
          this.vars.hcl.edad = this.vars.paciente.edad;
          this.vars.hcl.fecha_nac = this.vars.paciente.fecha_nac;
          this.vars.hcl.motivo = this.vars.paciente.motivo;
            /**/
        }/**/
      });
  }

  abrir_enf(){
    this.navCtrl.push(EnfPage);
  }

  crear_hcl(){
    this.vars.hcl = {
      embarazos: '',
      clave: '',
      key : '',
      nombre: '',
      fecha_nac: '',
      edad: null,
      grado: '',
      genero: '',
      colegio: '',
      fecha_entrevista: '',
      entrevistado: '',
      nombre_padre: '',
      fecha_nac_padre: '',
      edad_padre: '',
      profesion_padre: '',
      lugar_trabajo_padre: '',
      nombre_madre: '',
      fecha_nac_madre: '',
      edad_madre: '',
      profesion_madre: '',
      lugar_trabajo_madre: '',
      estado_civil_padres: '',
      motivo: '',
      areas_dificultad: '',
      descripcion_problema: '',
      inicio_problema: '',
      actitud_encargado_problema: '',
      existen_medidas: '',
      medidas_tomadas: '',
      resultados_medidas: '',
      nivel_socioeconomico: '',
      estado_casa: '',
      integracion_familiar: '',
      duerme_solo: '',
      con_quien_vive: '',
      hermanos: '',
      lugar_entre_hermanos: '',
      relacion_papa: '',
      relacion_mama: '',
      relacion_hermanos: '',
      relacion_otros: '',
      disciplina_casa: '',
      medidas_disciplina: '',
      inicio_escolaridad: '',
      adaptacion: '',
      grados_repetidos: '',
      razon_repetidos: '',
      centro_evaluacion: '',
      motivo_cambio: '',
      actitud_institucion_educativa: '',
      interaccion_companeros: '',
      interaccion_adultos: '',
      rendimiento: '',
      mejores_materias: '',
      peores_materias: '',
      relacion_maestros: '',
      edad_embarazo: '',
      perdidas: '',
      embarazo_deseado: '',
      intento_aborto: '',
      tipo_embarazo: '',
      medicamentos_usados: '',
      anestesia: '',
      tipo_parto2: '',
      control_prenatal: '',
      consumos: '',
      traumas: '',
      enfermedades: '',
      estado_nutricional: '',
      tipo_parto: '',
      tiempo_parto: '',
      presentacion_bebe: '',
      tiempo_llanto: '',
      complicaciones_parto: '',
      otras_complicaciones: '',
      peso_nacer: null,
      talla_nacer: '',
      terapias_especiales: '',
      tipo_lactancia: '',
      enfermedades_significativas: '',
      tratamientos_farmacologicos: '',
      habitos_alimenticios: '',
      habitos_sueno: '',
      vacunas: '',
      antecedentes_neurologicos: '',
      familia_aprendizaje: '',
      familia_intelectual: '',
      familia_lenguaje: '',
      familia_epilepsia: '',
      familia_alcoholismo: '',
      familia_psicosis: '',
      familia_otros: '',
      caracteristicas_emocionales: '',
      caracteristicas_sueno: '',
      caracteristicas_sociales: '',
      caracteristicas_alimentacion: '',
      edad_control_esfinter_vesical_noche: '',
      edad_control_esfinter_vesical_dia: '',
      edad_control_esfinter_anal_noche: '',
      edad_control_esfinter_anal_dia: '',
      musculo_cuello: '',
      levanto_cabeza: '',
      dio_vuelta: '',
      se_sento: '',
      gateo: '',
      paro: '',
      camino: '',
      gorjeo: '',
      sonrisa: '',
      laleo: '',
      balbuceo: '',
      primeras_palabras: '',
      frases_dos_palabras: '',
      oraciones_completas: '',
      nombre_encargado: '',
      fecha_nac_encargado: '',
      edad_encargado: '',
      profesion_encargado: '',
      lugar_trabajo_encargado: '',
      otra_area_dificultad:'',
      relacion_papa_desc:'',
      relacion_mama_desc:'',
      relacion_hermanos_desc:'',
      relacion_otros_desc:''
    }

  }

  abrir_hcl(){
    this.navCtrl.push(VerHclPage);
  }

  crear_perfil_caso(){
    console.log("creando perfil");
    this.vars.pc = {
      clave:'',
      key:'',
      institucion:'',
      fecha_observacion:'',
      dificultades_basicas:'',
      dificultades_academicas:'',
      dificultades_conducta:'',
      fortalezas_basicas:'',
      fortalezas_academicas:'',
      fortalezas_conducta:'',
      criterio1:'',
      criterio2:'',
      criterio3:'',
      criterio4:'',
      criterio5:'',
      observaciones:'',
      autorizado:''
    }
  }

  abrir_perfil_caso(){
    this.navCtrl.push(PerfilCasoPage);
  }

  cargar_perfil_caso(){
    this.pcCollection = this.afs.collection('perfilcaso', ref => ref.where('clave', '==', this.vars.paciente.key));
    this.pcCollection.valueChanges().subscribe( value => {

      if(value.length > 0){
        this.texto_boton_perfil = "revisar o editar perfil de caso";
        let pc:perfil = value[0];
        this.vars.pc = pc;
      }else{
        this.crear_perfil_caso();
        this.vars.pc.clave = this.vars.paciente.key;
        this.vars.pc.key = JSON.stringify(Date.now());
      }
    });
  }


  abrir_diario(){
    this.navCtrl.push(DiaroPage);
  }
}
