import {HttpClient, HttpInterceptor} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {InternalServiceProvider} from "../internal-service/internal-service";

/*
  Generated class for the TokenInterceptorServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TokenInterceptorServiceProvider implements  HttpInterceptor{

  constructor(public http: HttpClient,
              private internalService:InternalServiceProvider) {
    console.log('Hello TokenInterceptorServiceProvider Provider');
  }
  intercept(req, next){
    let token = localStorage.getItem('token');
    // console.log('tiene algo?, ',localStorage.hasOwnProperty('token'));
    // console.log('token del localStorage: ',token);

    console.log('token del internal: ',this.internalService.retornarToken())

    let tokenizedReq = req.clone({
      setHeaders:
        {
          Authorization: `Bearer ${token}`
          // Authorization: `Bearer ${authService.getToken()}`
        }
    })
    return next.handle(tokenizedReq)
  }

}
