import { Component, OnInit } from '@angular/core';
import { AngularFireAuth, AngularFireAuthProvider, FirebaseAuthStateObservable } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'kg-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  error: any;
  private listsOfUsers: any;
  private getID: boolean;

  constructor(
    private _angularFireAuth: AngularFireAuth,
  ) {  }

  ngOnInit() {

  }

  public login() {
    return this._angularFireAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then(success => console.log(success))
      .catch(err => console.log('test', err));
  }

}
