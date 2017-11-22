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

  constructor(private _AngularFirestore: AngularFirestore) {
    this.skillsCollection = _AngularFirestore.collection<Skills>('skills')
    this.skills = this.skillsCollection.valueChanges()
  }

}
