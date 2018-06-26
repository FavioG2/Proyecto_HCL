import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

//firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthProvider } from '../providers/auth/auth';


import { RegistroPacientePage } from '../pages/index.paginas';

export const firebaseConfig = {
  apiKey: "AIzaSyBXrUaZ_kYyeux83Z0FFx9Mml89SRGbQKg",
  authDomain: "hiper-1153d.firebaseapp.com",
  databaseURL: "https://hiper-1153d.firebaseio.com",
  projectId: "hiper-1153d",
  storageBucket: "hiper-1153d.appspot.com",
  messagingSenderId: "791416245699"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RegistroPacientePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      backButtonText: 'Atrás'
    } ),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RegistroPacientePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireDatabase,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider
  ]
})
export class AppModule {}
