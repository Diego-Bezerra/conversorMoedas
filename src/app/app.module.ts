import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { Toast } from '@ionic-native/toast';
import { DecimalPipe } from '@angular/common';
import { IonicStorageModule } from '@ionic/storage';
import { ConvertLocalPage } from '../pages/convert-local/convert-local';

@NgModule({
  declarations: [
    MyApp,
    ConvertLocalPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ConvertLocalPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Toast,
    DecimalPipe
  ]
})
export class AppModule {}
