import { Injectable } from '@angular/core'
import { Observable } from 'rxjs/Observable'
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore'

export interface Email {
  id: string,
  name: string,
  subject: string,
  email: string,
  message: string,
  markdown: string,
  open: boolean,
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
export class EmailService {
  public emailCollection: AngularFirestoreCollection<Email>
  public emails: Observable<Email[]>

  public emailOb: AngularFirestoreCollection<Email>
  public openMail: Observable<Email[]>

  public totalMail = 0
  public newMail = 0
  public readMail = 0

  constructor(private _AngularFirestore: AngularFirestore) {
    this.emailCollection = _AngularFirestore.collection<Email>('emails',
      ref => ref.orderBy('timestamp.timestamp')
    )
    this.emails = this.emailCollection.valueChanges()

    this.emails.subscribe(email => {
      (this.totalMail = email.length),
        (this.newMail = email.filter(e => e.open === false).length),
        (this.readMail = email.filter(e => e.open === true).length)
    })
  }

  public addEmail(id: string, data: Email) {
    return this._AngularFirestore
      .collection<Email>('emails')
      .doc(id)
      .set(data)
  }

  public openEmail(id) {
    this.emailOb = this._AngularFirestore.collection<Email>('emails', ref =>
      ref.where('id', '==', id)
    )
    const item = { open: true }
    this.emailOb.doc(id).update(item)
    return (this.openMail = this.emailOb.valueChanges())
  }

  public deleteEmail(id) {
    return this.emailOb.doc(id).delete()
  }
}
