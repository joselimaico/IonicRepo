import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {User} from "../../app/Clases/user";
import {AuthServiceProvider} from "../../providers/auth-service/auth-service";
import {InternalServiceProvider} from "../../providers/internal-service/internal-service";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  user = {} as User;

  constructor(public navCtrl: NavController
              , public navParams: NavParams,
              private authService:AuthServiceProvider,
              private _internalService:InternalServiceProvider) {
  }

  login(user:User){
    this.authService.login(user.username,user.password)
      .subscribe(
        res => {
          console.log(res)
          localStorage.setItem('token',`${res.token}`)
          console.log('Dentro del subscribe el localstorage tiene algo??',localStorage.hasOwnProperty('token'));
          console.log('dentro del subscribe el token es: ',localStorage.getItem('token'));
          this._internalService.cargarToken(res.token);
          this.navCtrl.setRoot('HomePage')
        },
        err => console.log(err)
      )

  }

  reg(){
    this.navCtrl.push('RegisterPage');
  }
}
