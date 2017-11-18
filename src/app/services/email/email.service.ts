import { Injectable } from '@angular/core'
import { Observable } from 'rxjs/Observable'
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore'

export interface email {
  id: string,
  name: string,
  subject: string,
  email: string,
  message: string,
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

  public newEmailsamount: number = 0 

  constructor(private _AngularFirestore: AngularFirestore) { 
    this.emailCollection = _AngularFirestore.collection<email>('emails')
    this.emails = this.emailCollection.valueChanges()
   }


   getNumberOfNewEmail() {
   	return this.emails.subscribe( email => {
        this.newEmailsamount = email.filter(e => e.open === false).length
     })
   }

 

}
