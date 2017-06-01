import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
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

  public authEmail = false;
  public toggleLogin: boolean = false;

  @Output() loginBt = new EventEmitter();

  constructor(
    private _authService: AuthService,
    private _appService: AppService,
    private _notificationService: NotificationService
  ) { }

  ngOnInit() {
    this.amILogIn();
  }

  private amILogIn() {
    return this._authService.isAuth().authState.subscribe(data => this.isAuth = data);
  }

  public loginBtn() {
    return this.loginBt.emit();
  }

  public logout() {
    return this._authService.logOut()
      .then(success => {
        this._appService.goToHomePage();
        this._notificationService.notifitem('exit_to_app', 'You Have Just Sing sign out', 'You can Sign back in at anytime', true);
      })
      .catch(err => this._notificationService.notifitem('error', err.name, err.message, true));
  }

  ngOnDestroy() {
    this.amILogIn().unsubscribe();
  }

}
