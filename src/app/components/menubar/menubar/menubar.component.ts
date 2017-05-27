import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { AppService } from '../../../services/app.service';
import { NotificationService } from '../../../services/notification/notification.service';

@Component({
  selector: 'kg-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.sass'],
  providers: [AuthService, AppService, NotificationService]
})
export class MenubarComponent implements OnInit, OnDestroy {

  public isAuth: any;
  private userList: any;

  public email = 'kgpsounds.com@gmail.com';
  public authEmail = false;

  constructor(
    private _authService: AuthService,
    private _appService: AppService,
    private _notificationService: NotificationService
  ) { }

  ngOnInit() {
    this.amILogIn();
  }

  private amILogIn() {
    return this._authService.isAuth().authState.subscribe(data => {
      this.isAuth = data;
      if (data === null) { return }
      if (data.providerData[0].email === this.email) {
        this.authEmail = true;
      } else {
        this.authEmail = false;
      }
    });
  }

  public logIn() {
    return this._authService.login()
      .then(success => {
        this._appService.goToAdminPage();
        this._notificationService.notifitem('account_circle', `welcome ${success.user.providerData[0].displayName}`, success.user.providerData[0].email, true)
      })
      .catch(err => this._notificationService.notifitem('error', err.name, err.message, true));
  }

  public logout() {
    return this._authService.logOut()
      .then(success => {
        this._appService.goToHomePage();
        this.authEmail = false;
        this._notificationService.notifitem('exit_to_app', 'You Have Just Sing sign out', 'You can Sign back in at anytime', true);
      })
      .catch(err => this._notificationService.notifitem('error', err.name, err.message, true));
  }

  ngOnDestroy() {
    this.amILogIn().unsubscribe();
  }

}
