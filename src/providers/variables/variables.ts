import { Injectable } from '@angular/core';
import { paciente } from "../../pages/clases/pacientes";
import { hcl } from '../../pages/clases/hcl';
import { entrada } from '../../pages/clases/entrada';
import { perfil } from "../../pages/clases/perfil";
import { enf } from "../../pages/clases/enf";

/*
  Generated class for the VariablesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class VariablesProvider {

  public email:string = '';
  public paciente:paciente = null;
  public entrada:entrada = null;
  public pc:perfil = null;
  public hcl:hcl;
  public enf:enf;

  constructor() {
    console.log('Hello VariablesProvider Provider');
  }

}
