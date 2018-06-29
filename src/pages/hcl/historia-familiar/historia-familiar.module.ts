import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HistoriaFamiliarPage } from './historia-familiar';

@NgModule({
  declarations: [
    HistoriaFamiliarPage,
  ],
  imports: [
    IonicPageModule.forChild(HistoriaFamiliarPage),
  ],
})
export class HistoriaFamiliarPageModule {}
