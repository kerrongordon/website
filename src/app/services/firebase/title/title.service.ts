import { Injectable } from '@angular/core';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';

@Injectable()
export class TitleService {

  public title: FirebaseObjectObservable<any>;

  constructor(
    private _angularFire: AngularFire
  ) { }

  public getTitle() {
    return this.title = this._angularFire.database.object('title') as FirebaseObjectObservable<any>;
  }

}
