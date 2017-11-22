import { Injectable } from '@angular/core'
import { Observable } from 'rxjs/Observable'
import { Subscription } from 'rxjs/Subscription'
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore'

export interface Description {
  content: string
}

@Injectable()
export class DescriptionService {
  private descriptionDoc: AngularFirestoreDocument<Description>
  public description: Observable<Description>
  public docsOb: string
  public docsSub: Subscription

  constructor(private _AngularFirestore: AngularFirestore) {
    this.descriptionDoc = this._AngularFirestore.doc<Description>('description/0')
    this.description = this.descriptionDoc.valueChanges()
    this.docsSub = this.description.subscribe(data => this.docsOb = data.content )
  }

}
