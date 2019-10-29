import { Injectable } from '@angular/core';
import { Perfil } from '../_miclase/perfil';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CedinsiServicioService {

  // objPerfil: Perfil; 
  constructor( private MihttpClient: HttpClient) { }

  // crearPerfil(){
  //   console.log('Estoy adentro del servicio')

  //   this.objPerfil = {

  //     titulo: "titulo",
  //     subtitulo: "subtitulo - otra prueba"

  //   };

  //   return this.objPerfil;
  // }


  obtenerTodos(){

    console.log("estoy en el metodo de obtener todos")
     
    return this.MihttpClient.get('https://jsonplaceholder.typicode.com/todos/1');


  }

}
