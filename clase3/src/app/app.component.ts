import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})



export class AppComponent implements OnInit {
  placeholderUsuario = 'Digite su usuario';
  imagen = 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Jupiter_by_Cassini-Huygens.jpg';
  cantidadIntentos: number;
  variableInput;
  mostrarFormulario: boolean;


  opciones = ["Viviana", "ASDFASLDFKJL", "carolina"];


  constructor() {

  }

  ngOnInit() {
    this.cantidadIntentos = 0;
    this.mostrarFormulario = false;
    // Aqui cargo el JSON
  }

  ocultarMostrarFormulario(){
    this.mostrarFormulario = !this.mostrarFormulario;
  }

  clickPrueba() {
    this.cantidadIntentos++;
  }
}
