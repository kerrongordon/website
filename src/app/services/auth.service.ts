import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AngularFireAuth, AngularFireAuthProvider, FirebaseAuthStateObservable } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

@Injectable()
export class AuthService {

  public isLogin: any;

  constructor(private afAuth: AngularFireAuth, private router: Router) { }

  public canActivate(): Observable<boolean> {
      return Observable.from(this.afAuth.authState)
        .take(1)
        .map(state => !!state)
        .do(authenticated => {
      if
      (!authenticated) { this.router.navigate([ '' ]); }
      });
    }

  public isAuth() {
    return this.isLogin = this.afAuth;
  }

  public logOut() {
    return this.afAuth.auth.signOut();
  }

  public login() {
    return this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  public loginWithEmail(email, pass) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, pass);
  }

}

