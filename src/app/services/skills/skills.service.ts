import { Injectable } from '@angular/core'
import { Observable } from 'rxjs/Observable'
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore'

export interface Skills {
  title: string,
  level: number
}

@Injectable()
export class SkillsService {

  private skillsCollection: AngularFirestoreCollection<Skills>
  public skills: Observable<Skills[]>

  constructor(private _afs: AngularFirestore) { }

  loadListOfSkills() {
    this.skillsCollection = this._afs.collection<Skills>('skills')
    return this.skills = this.skillsCollection.valueChanges()
  }

}
