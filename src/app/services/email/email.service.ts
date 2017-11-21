import { Injectable } from '@angular/core'
import { Observable } from 'rxjs/Observable'
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore'

export interface email {
  id: string,
  name: string,
  subject: string,
  email: string,
  message: string,
  markdown: string,
  open: boolean,
  timestamp: timestamp
 }

export interface timestamp {
  timestamp: number,
  month: string,
  weekday: string,
  year: number,
  date: number,
  time: time
}

export interface time {
  hours: number,
  minutes: number,
  seconds: number,
  Milliseconds: number
}

@Injectable()
export class EmailService {

  public emailCollection: AngularFirestoreCollection<email>
  public emails: Observable<email[]>

  public emailOb: AngularFirestoreCollection<email>
  public openMail: Observable<email[]>

  public totalMail: number = 0
  public newMail: number = 0
  public readMail: number = 0

  constructor(private _AngularFirestore: AngularFirestore) { 
    this.emailCollection = _AngularFirestore
      .collection<email>('emails', ref => ref.orderBy('timestamp.timestamp') )
    this.emails = this.emailCollection.valueChanges()

    this.emails.subscribe(email => {
        this.totalMail = email.length,
        this.newMail = email.filter(e => e.open === false).length,
        this.readMail = email.filter(e => e.open === true).length
    })
  }

  addEmail(id: string, data: object) {
    return this._AngularFirestore.collection<email>('emails').doc(id).set(data)
  }

  openEmail(id) {
    this.emailOb = this._AngularFirestore
      .collection<email>('emails', ref => ref.where('id', '==', id) )
    const item = { open: true }
    this.emailOb.doc(id).update(item)
    return this.openMail = this.emailOb.valueChanges()
  }

  deleteEmail(id) {
    return this.emailOb.doc(id).delete()
  }

}
