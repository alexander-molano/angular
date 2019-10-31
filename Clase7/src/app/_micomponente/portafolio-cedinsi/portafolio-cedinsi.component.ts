import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-portafolio-cedinsi',
  templateUrl: './portafolio-cedinsi.component.html',
  styleUrls: ['./portafolio-cedinsi.component.sass']
})
export class PortafolioCedinsiComponent implements OnInit {

  items: Observable<any[]>;
  constructor(db: AngularFirestore) {
    this.items = db.collection('items').valueChanges();
  }




  ngOnInit() {

  //   this.items = [
  //   { llave: "llave1", valor: "valor1" }, 
  //   { llave: "llave2", valor: "valor2" },
  //   { llave: "llave3", valor: "valor3" }
  // ]

  //   console.log(this.items)


  }

}
