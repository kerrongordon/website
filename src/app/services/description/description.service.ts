import { Injectable } from '@angular/core'
import { Observable } from 'rxjs/Observable'
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore'

export interface Description {
  content: string
}

@Injectable()
export class DescriptionService {

  private descriptionDoc: AngularFirestoreDocument<Description>
  public description: Observable<Description>

  constructor(
    private _afs: AngularFirestore
  ) { }

  loadDes() {
    this.descriptionDoc = this._afs.doc<Description>('description/0')
    return this.description = this.descriptionDoc.valueChanges()
  }

}
