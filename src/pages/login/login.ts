import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AuthProvider } from "../../providers/auth/auth";


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

    user= { email : '', password : ''};

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public auth : AuthProvider,
              public alertCtrl : AlertController) {


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  signin(){
    this.auth.registerUser(this.user.email,this.user.password)
    .then((user) => {
      // El usuario se ha creado correctamente
    })
    .catch(err=>{
      let mensaje = this.loginErrorHandler(err.code);
      let alert = this.alertCtrl.create({
        title: 'Error',
        subTitle: mensaje,
        buttons: ['Aceptar']
      });
      alert.present();
    })

  }

  loginErrorHandler(err){
    if(err === 'auth/email-already-in-use'){
      return "La dirección de correo ya ha sido usada por otra cuenta";
    }else if(err === 'auth/weak-password'){
      return "La contraseña debe tener al menos 6 caracteres"
    }else if(err === 'auth/invalid-email'){
      return "La dirección de correo electrónico es incorrecta"
    }else if(err === 'auth/user-not-found'){
      return "Los datos no coinciden con los de ningún usuario registrado"
    }else if(err === 'auth/wrong-password'){
      return "La contraseña es incorrecta"
    }
    else{
      return "Error desconocido al registrar al usuario";
    }
  }

  login()
  {
    this.auth.loginUser(this.user.email,this.user.password ).then((user) => {
      }
    )

     .catch(err=>{
      
      console.log("ERROOOOOOR");
      console.log(err); 
      let mensaje = this.loginErrorHandler(err.code);
      let alert = this.alertCtrl.create({
        title: 'Error',
        subTitle: mensaje,
        buttons: ['Aceptar']
      });
      alert.present();
    })
  }


}
