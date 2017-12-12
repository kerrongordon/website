import { Injectable } from '@angular/core'
import { Email } from '../../interface/email'
import { Observable } from 'rxjs/Observable'
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore'

@Injectable()
export class SendMessageService {

  constructor(
    private _afs: AngularFirestore
  ) { }

  addEmail(id: string, data: Email) {
    return this._afs
      .collection<Email>('emails')
      .doc(id)
      .set(data)
  }

}
