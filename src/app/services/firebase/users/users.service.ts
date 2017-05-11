import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable, AngularFireAuth } from 'angularfire2';

@Injectable()
export class UsersService {

  public userList: FirebaseListObservable<any>;

  constructor(
    private _angularFire: AngularFire,
    private _angularFireAuth: AngularFireAuth
  ) { }

  public getUsersList() {
    return this.userList = this._angularFire.database.list('/users/') as FirebaseListObservable<any>;
  }

}
