import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class UsersService {

  public userList: FirebaseListObservable<any>;

  constructor(
    private _angularFireDatabase: AngularFireDatabase
  ) { }

  public getUsersList() {
    return this.userList = this._angularFireDatabase.list('users') as FirebaseListObservable<any>;
  }

}
