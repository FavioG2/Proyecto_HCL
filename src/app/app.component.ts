import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AuthProvider } from '../providers/auth/auth';

import { HomePage } from  '../pages/home/home';

import { VariablesProvider } from '../providers/variables/variables';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = 'LoginPage'

  constructor(platform: Platform,
              statusBar: StatusBar,
              splashScreen: SplashScreen,
              private auth: AuthProvider,
              public vars: VariablesProvider) {

    platform.ready().then(() => {

      this.auth.Session.subscribe(session=>{
        if(session != null ){
          this.vars.email = session.email;
        }

        if(session){
            this.rootPage = HomePage;
        }
          else{
            this.rootPage = 'LoginPage';
          }
      });


      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
