import { Component, OnInit } from '@angular/core';
import { Perfil } from './_miclase/perfil';
import { CedinsiServicioService } from './_miservicio/cedinsi-servicio.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  objPerfil : Perfil;

  objeto: any;


  constructor(public perfilServicio: CedinsiServicioService){}

  ngOnInit(){

    

    // console.log(this.objPerfil)

    // console.log(this.perfilServicio.crearPerfil())
    // console.log(this.objPerfil);

    // // this.perfilServicio.crearPerfil();
    // this.objPerfil = this.perfilServicio.crearPerfil();

    this.perfilServicio.obtenerTodos().subscribe( valorX => this.objeto = valorX);

    console.log(this.objeto)

    
    

  }

}
