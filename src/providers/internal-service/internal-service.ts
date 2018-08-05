import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {User} from "../../app/Clases/user";

/*
  Generated class for the InternalServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class InternalServiceProvider {

  token:string;

   arregloAuxiliar:any[];
  // UsuarioActual:Usuario;
  // LugarEscogido: Lugar;
  // HabitacionEscogida: Habitacion;
  // PlantaEscogida: Planta;

  constructor() { }

  cargarAlAuxiliar(algo){
    this.arregloAuxiliar.push(algo);
    console.log('arreglo auxiliar dice: mi contenido es: ',this.arregloAuxiliar);
  }

  cargarToken(token){
    this.token = token;
  }

  retornarToken(){
    return this.token;
  }

  // actualizarUsuario(user:User){
  //   this.UsuarioActual = user;
  //   console.log('el nuevo usuario es: ',this.UsuarioActual);
  // }
  //
  // actualizarLugar(place:Lugar){
  //   this.LugarEscogido = place;
  // }
  //
  // actualizarHabitacion(room:Habitacion){
  //   this.HabitacionEscogida = room;
  // }
  //
  // actualizarPlanta(plant:Planta){
  //   this.PlantaEscogida = plant;
  // }
  //
  //
  //
  // retornarUsuario(){
  //   return this.UsuarioActual;
  // }
  //
  // retornarLugar(){
  //   return this.LugarEscogido;
  // }
  //
  // retornarHabitacion(){
  //   return this.HabitacionEscogida;
  // }
  //
  // retornarPlanta(){
  //   return this.PlantaEscogida;
  // }
  //


}
