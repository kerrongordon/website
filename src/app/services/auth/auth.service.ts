import { Injectable } from '@angular/core'
import { CanActivate, Router } from '@angular/router'
import { AngularFireAuth, AngularFireAuthProvider } from 'angularfire2/auth'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/from'
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/take'

@Injectable()
export class AuthService implements CanActivate {

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router
  ) { }

  canActivate(): Observable<boolean> {
    return Observable.from(this.afAuth.authState)
      .take(1)
      .map(state => !!state)
      .do(authenticated => {
        if
      (!authenticated) { this.router.navigate(['']) }
      })
  }

  login(email: string, password: string) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then(() => this.router.navigate(['/admin']))
  }

  logout() {
    return this.afAuth.auth.signOut()
      .then(() => this.router.navigate(['']))
  }

}
