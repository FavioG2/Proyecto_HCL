import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IdentificacionGeneralPage } from './identificacion-general';

@NgModule({
  declarations: [
    IdentificacionGeneralPage,
  ],
  imports: [
    IonicPageModule.forChild(IdentificacionGeneralPage),
  ],
})
export class IdentificacionGeneralPageModule {}
