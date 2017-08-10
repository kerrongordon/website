import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Portfolio } from '../../../config/interface/portfolio';
import * as firebase from 'firebase/app'; // for typings
import { FirebaseApp } from 'angularfire2'; // for methods
import 'firebase/storage'; // only import firebase storage

@Injectable()
export class PortfoliosService {

  private storageRef: firebase.storage.Reference;

  constructor(
    private _firebaseApp: FirebaseApp,
    private _angularFireDatabase: AngularFireDatabase,
  ) { 
    this.storageRef = _firebaseApp.storage().ref();
  }

  public getListPortfolios() {
    return this._angularFireDatabase.list('portfolios') as FirebaseListObservable<Portfolio[]>;
  }

  public getPortfolioObject(key) {
    return this._angularFireDatabase.object('portfolios/' + key) as FirebaseObjectObservable<Portfolio>;
  }

  public getTheLastFour() {    
    return this._angularFireDatabase.list('portfolios', { 
      query: {
        limitToLast: 4,
        orderByChild: 'timestamp'
      }
     }) as FirebaseListObservable<Portfolio[]>;
  }

  public removeFiles(dir) {
    const desertRef = this.storageRef.child(dir);
    return desertRef.delete()
      .then(() => console.log('File deleted successfully'))
      .catch((error) => console.log('Uh-oh, an error occurred!'));
  }

}