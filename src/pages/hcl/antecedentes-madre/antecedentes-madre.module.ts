import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AntecedentesMadrePage } from './antecedentes-madre';

@NgModule({
  declarations: [
    AntecedentesMadrePage,
  ],
  imports: [
    IonicPageModule.forChild(AntecedentesMadrePage),
  ],
})
export class AntecedentesMadrePageModule {}
