import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DiaroGeneralPage } from './diaro-general';

@NgModule({
  declarations: [
    DiaroGeneralPage,
  ],
  imports: [
    IonicPageModule.forChild(DiaroGeneralPage),
  ],
})
export class DiaroGeneralPageModule {}
