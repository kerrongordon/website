import { Component, OnInit } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { Router } from '@angular/router';
import { fallIn } from '../../router.animations';

@Component({
  selector: 'kg-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
  animations: [fallIn()]
})
export class LoginComponent implements OnInit {

  error: any;

  constructor(public af: AngularFire, private router: Router) {
    this.af.auth.subscribe(auth => {
      if (auth) {
        this.router.navigateByUrl('/admin');
      }
    });
   }

  ngOnInit() {
  }

  loginGoogle() {
    this.af.auth.login({
      provider: AuthProviders.Google,
      method: AuthMethods.Popup,
    }).then(
        (success) => {
        this.router.navigate(['/admin']);
      }).catch(
        (err) => {
        this.error = err;
      });
  }

}
