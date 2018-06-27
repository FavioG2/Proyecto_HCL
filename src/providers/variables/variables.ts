import { Injectable } from '@angular/core';
import { paciente } from "../../pages/clases/pacientes";
import { hcl } from '../../pages/clases/hcl';

/*
  Generated class for the VariablesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class VariablesProvider {

  public email:string = '';
  public paciente:paciente = null;

  public hcl:hcl = null;

  constructor() {
    console.log('Hello VariablesProvider Provider');
  }

}
