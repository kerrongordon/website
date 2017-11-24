import { Injectable } from '@angular/core'
import { Observable } from 'rxjs/Observable'
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore'

export interface Project {
  id: string,
  title: string,
  markdown: string,
  timestamp: Timestamp
}

export interface Timestamp {
  timestamp: number,
  month: string,
  weekday: string,
  year: number,
  date: number,
  time: Time
}

export interface Time {
  hours: number,
  minutes: number,
  seconds: number,
  Milliseconds: number
}

@Injectable()
export class ProjectService {

  public projectCollection: AngularFirestoreCollection<Project>
  public projects: Observable<Project[]>

  constructor(private _AngularFirestore: AngularFirestore) {
    this.projectCollection = this._AngularFirestore.collection<Project>('projects')
    this.projects = this.projectCollection.valueChanges()
  }

  public addProject(id: string, data: Project) {
    return this._AngularFirestore
      .collection<Project>('projects')
      .doc(id)
      .set(data)
  }

}
