import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PerfilCasoPage } from './perfil-caso';

@NgModule({
  declarations: [
    PerfilCasoPage,
  ],
  imports: [
    IonicPageModule.forChild(PerfilCasoPage),
  ],
})
export class PerfilCasoPageModule {}
