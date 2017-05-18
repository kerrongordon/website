import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

@Injectable()
export class SkillsService {

  public listOfSkills: FirebaseListObservable<Skills[]>;
  public skillObject: FirebaseObjectObservable<any>;

  constructor(private _angularFireDatabase: AngularFireDatabase) { }

  public getListOfSkills() {
    return this.listOfSkills = this._angularFireDatabase.list('skills') as FirebaseListObservable<Skills[]>;
  }

  public getSkillObject(key) {
    return this.skillObject = this._angularFireDatabase.object('skills/' + key) as FirebaseObjectObservable<any>;
  }

}

interface Skills {
  title: string;
  level: string;
}
