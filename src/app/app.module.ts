import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {FormsModule} from "@angular/forms";
import {UsuarioService} from "../servicios/usuario.service";
import {MotrarUsuarioComponent} from "../componentes/motrar-usuario.component";
import {HttpClientModule} from "@angular/common/http";
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { TokenInterceptorServiceProvider } from '../providers/token-interceptor-service/token-interceptor-service';
import { InternalServiceProvider } from '../providers/internal-service/internal-service';

@NgModule({
  declarations: [
    MyApp,
    MotrarUsuarioComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    FormsModule,
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [ // Servicios
    UsuarioService,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthServiceProvider,
    TokenInterceptorServiceProvider,
    InternalServiceProvider
  ]
})
export class AppModule {}
