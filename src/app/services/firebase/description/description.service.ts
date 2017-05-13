import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';

@Injectable()
export class DescriptionService {

  public description: FirebaseObjectObservable<any>;

  constructor(
    private _angularFireDatabase: AngularFireDatabase
  ) { }

  public getDescription() {
    return this.description = this._angularFireDatabase.object('description') as FirebaseObjectObservable<any>;
  }

}
