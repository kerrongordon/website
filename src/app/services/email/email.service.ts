import { Injectable } from '@angular/core'
import { Observable } from 'rxjs/Observable'
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore'

export interface email { 
  userName: string,
  userEmail: string,
  userMessage: string
 }

@Injectable()
export class EmailService {

  public emailCollection: AngularFirestoreCollection<email>
  public emails: Observable<email[]>


  constructor(private _AngularFirestore: AngularFirestore) { 
    this.emailCollection = _AngularFirestore.collection<email>('emails')
    this.emails = this.emailCollection.valueChanges()
   }

}
