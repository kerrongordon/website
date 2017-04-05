import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/angularfire2';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

@Injectable()
export class AuthService {

  public isLogin: any;

  constructor(private auth: AngularFireAuth, private router: Router) { }

  canActivate(): Observable<boolean> {
      return Observable.from(this.auth)
        .take(1)
        .map(state => !!state)
        .do(authenticated => {
      if
      (!authenticated) { this.router.navigate([ '/login' ]); }
      });
    }

  public isAuth() {
    return this.isLogin = this.auth;
  }

  public logOut() {
    return this.auth.logout();
  }

}

