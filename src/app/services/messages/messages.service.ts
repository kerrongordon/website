import { Injectable } from '@angular/core'
import { Email } from '../../interface/email'
import { Observable } from 'rxjs/Observable'
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore'

@Injectable()
export class MessagesService {

  private openM: AngularFirestoreCollection<Email>
  private messageCollection: AngularFirestoreCollection<Email>
  private message: Observable<Email[]>
  private item = { open: true }

  constructor(
    private _afs: AngularFirestore
  ) { }

  loadMessage() {
    this.messageCollection = this._afs.collection<Email>('emails', ref => ref.orderBy('timestamp.timestamp'))
    return this.message = this.messageCollection.valueChanges()
  }

  openMessage(id) {
    this.openM = this._afs.collection<Email>('emails', ref => ref.where('id', '==', id))
    this.openM.doc(id).update(this.item)
    return this.openM.valueChanges()
  }

  deleteMessage(id) {
    return this.openM.doc(id).delete()
  }

}
