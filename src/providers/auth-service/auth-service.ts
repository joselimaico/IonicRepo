import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {User} from "../../app/Clases/user";


@Injectable()
export class AuthServiceProvider {
  private URL = "localhost";
  private _signupUrl=`http://${this.URL}:1337/Usuario/signup`
  private _loginUrl=`http://${this.URL}:1337/Usuario/login`

  constructor(private http: HttpClient) {

  }

  signin(username, password){
    return this.http.post<any>(this._signupUrl,{username:username, password:password, imagenUsuario:'https://sistemas.com/termino/wp-content/uploads/Usuario-Icono.jpg'});
  }
  login(username,password) {

    return this.http.post<any>(this._loginUrl,{username:username,password:password});

  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
  }

  loggedIn(){
    return !!localStorage.getItem('token');
  }

  loggedOut(){
    localStorage.removeItem('token');
    //this._router.navigate(['/login']);

  }

  getToken(){
    return localStorage.getItem('token');
  }

}
