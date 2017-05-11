import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class SkillsService {

  public listOfSkills: FirebaseListObservable<Skills[]>;

  constructor(private _angularFire: AngularFire) { }

  public getListOfSkills() {
    return this.listOfSkills = this._angularFire.database.list('skills') as FirebaseListObservable<Skills[]>;
  }

}

interface Skills {
  title: string;
  level: string;
}
