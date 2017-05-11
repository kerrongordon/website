import { Injectable } from '@angular/core';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';

@Injectable()
export class DescriptionService {

  public description: FirebaseObjectObservable<any>;

  constructor(
    private _angularFire: AngularFire
  ) { }

  public getDescription() {
    return this.description = this._angularFire.database.object('description') as FirebaseObjectObservable<any>;
  }

}
