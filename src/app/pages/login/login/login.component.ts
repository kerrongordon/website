import { Component, OnInit, OnDestroy } from '@angular/core';
import { AngularFireAuth, AngularFireAuthProvider } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { AppService } from '../../../services/app.service';
import { DatabaseService } from '../../../services/database.service';
import { UsersService } from '../../../services/firebase/users/users.service';

@Component({
  selector: 'kg-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
  providers: [AuthService, DatabaseService, UsersService, AppService]
})
export class LoginComponent implements OnInit, OnDestroy {

  error: any;
  private listsOfUsers: any;
  private getID: boolean;

  constructor(
    private _angularFire: AngularFireAuth,
    private _router: Router,
    private _databaseService: DatabaseService,
    private _authService: AuthService,
    private _usersService: UsersService,
    private _appService: AppService
  ) {  }

  ngOnInit() {
    this.usersList();
  }

  public login(event) {
    event.preventDefault();
    return this._angularFire.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider)
      .then(success => this.getuserInfor())
      .catch(err => console.log(err));
  }

  private amILogIn() {
    return this._angularFire.authState.subscribe(auth => {
      if (auth) { this.goToAdminPage() }
    });
  }

  private usersList() {
    return this._usersService.getUsersList().subscribe(data => { this.listsOfUsers = data; this.amILogIn(); });
  }

  private doUserExist(event): void {
    return this.listsOfUsers.filter(userdata => this.getID = userdata.google.uid.indexOf(event) > -1);
  }

  private pushNewUser(event) {
    return this._databaseService.Users().push(event);
  }

  private goToAdminPage() {
    return this._appService.goToAdminPage();
  }

  private getuserInfor() {
    return this._authService.isAuth().authState.subscribe(data => {
      const uids = data.uid;
      const userData = { google: data }
      this.doUserExist(uids);
      if (this.getID === true || this.getID !== undefined) {
        this.goToAdminPage();
      } else {
        this.pushNewUser(userData)
          .then(success => this.goToAdminPage())
          .catch(err => console.log(err));
      }
    });
  }

  ngOnDestroy() {
    this.usersList().unsubscribe();
    this.getuserInfor().unsubscribe();
    this.amILogIn().unsubscribe();
  }

}
