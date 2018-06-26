import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ElegirPacientePage } from './elegir-paciente';

@NgModule({
  declarations: [
    ElegirPacientePage,
  ],
  imports: [
    IonicPageModule.forChild(ElegirPacientePage),
  ],
})
export class ElegirPacientePageModule {}
