import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { NotificationService } from '../../services/notification/notification.service'
import { AuthService } from '../../services/auth/auth.service'

@Component({
  selector: 'kgp-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
  providers: [NotificationService, AuthService]
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup

  constructor(
    private _ns: NotificationService,
    private _as: AuthService,
    private _route: Router
  ) { }

  ngOnInit() {
    this.loadLoginForm()
  }

  loadLoginForm() {
    return this.loginForm = new FormGroup({
      loginEmail: new FormControl('', {
        validators: Validators.compose([Validators.required, Validators.email]),
        updateOn: 'change'
      }),
      loginPassword: new FormControl('', {
        validators: Validators.compose([Validators.required, Validators.minLength(8)])
      })
    })
  }

  emailV() {
    const email = this.loginForm.controls.loginEmail

    if ( !email.dirty ) {
      return this._ns.notifitem('Please add an Email', 'There is no Email Found in The the Email feld', true)
    }

    if ( email.invalid ) {
      return this._ns.notifitem('Email is Invalid', 'Please add an Valid Email `example@gmail.com`', true)
    }

    return this.passV()
  }

  passV() {
    const password = this.loginForm.controls.loginPassword

    if ( !password.dirty ) {
      return this._ns.notifitem('Please add an Password', 'There is no Password Found in The the Password feld', true)
    }

    if ( password.invalid ) {
      return this._ns.notifitem('Password is Invalid', 'Password most have a minimum length of 8 characters', true)
    }

    this.login()
  }

  onSubmit() {
    this.emailV()
  }


  login() {
    const { loginEmail, loginPassword } = this.loginForm.value
    return this._as.login(loginEmail, loginPassword)
  }

}
