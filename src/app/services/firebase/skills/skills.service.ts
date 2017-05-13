import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class SkillsService {

  public listOfSkills: FirebaseListObservable<Skills[]>;

  constructor(private _angularFireDatabase: AngularFireDatabase) { }

  public getListOfSkills() {
    return this.listOfSkills = this._angularFireDatabase.list('skills') as FirebaseListObservable<Skills[]>;
  }

}

interface Skills {
  title: string;
  level: string;
}
