import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { AppService } from '../../../services/app.service';

@Component({
  selector: 'kg-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.sass'],
  providers: [AuthService, AppService]
})
export class MenubarComponent implements OnInit {

  public isAuth: any;

  constructor(
    private _authService: AuthService,
    private _appService: AppService
  ) { }

  ngOnInit() {
    this.amILogIn();
  }

  private amILogIn() {
    return this._authService.isAuth().authState.subscribe(data => this.isAuth = data);
  }

  public logIn() {
    return this._authService.login()
      .then(success => this._appService.goToAdminPage())
      .catch(err => console.log('test', err));
  }

  public logout() {
    return this._authService.logOut()
      .then(success => this._appService.goToHomePage())
      .catch(err => console.log('err ', err));
  }

}
