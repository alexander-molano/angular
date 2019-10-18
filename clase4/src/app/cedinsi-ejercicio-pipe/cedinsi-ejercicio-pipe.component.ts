import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cedinsi-ejercicio-pipe',
  templateUrl: './cedinsi-ejercicio-pipe.component.html',
  styleUrls: ['./cedinsi-ejercicio-pipe.component.scss']
})
export class CedinsiEjercicioPipeComponent implements OnInit {



  fecha: number = Date.now();

  constructor() { }

  ngOnInit() {
  }

}
