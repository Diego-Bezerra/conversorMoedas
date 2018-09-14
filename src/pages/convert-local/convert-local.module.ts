import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConvertLocalPage } from './convert-local';

@NgModule({
  declarations: [
    ConvertLocalPage,
  ],
  imports: [
    IonicPageModule.forChild(ConvertLocalPage),
  ],
})
export class ConvertLocalPageModule {}
