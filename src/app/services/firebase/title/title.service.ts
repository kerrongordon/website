import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';

@Injectable()
export class TitleService {

  public title: FirebaseObjectObservable<any>;

  constructor(
    private _angularFireDatabase: AngularFireDatabase
  ) { }

  public getTitle() {
    return this.title = this._angularFireDatabase.object('title') as FirebaseObjectObservable<any>;
  }

}
