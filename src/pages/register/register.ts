import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {User} from "../../app/Clases/user";
import {AuthServiceProvider} from "../../providers/auth-service/auth-service";

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  user = { } as User

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private authService:AuthServiceProvider
  ) {
  }

  signup(user:User){
    this.authService.signin(user.username,user.password)
      .subscribe(
        res => {
          console.log(res);
          localStorage.setItem('token',res.token) //AQUI GUARDA EL TOKEN
          this.navCtrl.push('HomePage');
        },
        err => console.log(err)
      )

  }

}
