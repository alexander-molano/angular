import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Component({
  selector: 'app-logincedinsi',
  templateUrl: './logincedinsi.component.html',
  styleUrls: ['./logincedinsi.component.scss']
})
export class LogincedinsiComponent implements OnInit {

  constructor(public miafAuth: AngularFireAuth) { }

  login() {
    this.miafAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }
  logout() {
    this.miafAuth.auth.signOut();
  }


  ngOnInit() {
  }

}
