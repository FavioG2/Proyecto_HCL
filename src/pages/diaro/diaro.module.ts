import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DiaroPage } from './diaro';

@NgModule({
  declarations: [
    DiaroPage,
  ],
  imports: [
    IonicPageModule.forChild(DiaroPage),
  ],
})
export class DiaroPageModule {}
