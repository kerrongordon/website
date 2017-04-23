import { Component, OnInit } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { Router } from '@angular/router';

@Component({
  selector: 'kg-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
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
    this.requestPermission();
  }

  public requestPermission() {
    return Notification.requestPermission();
  }

  spawnNotification(theBody, theTitle) {
    let options = {
        body: theBody,
        icon: '/assets/icons/ms-icon-144x144.png'
    }
    let n = new Notification(theTitle,options);
  }

  login(event) {
    event.preventDefault();
    this.af.auth.login({
      provider: AuthProviders.Google,
      method: AuthMethods.Popup,
    }).then(
        (success) => {
        this.router.navigate(['/admin']);
        return;
      }).catch(
        (err) => {
        this.error = err;
        this.spawnNotification(err, 'Login Error');
        return;
      });
  }

}
