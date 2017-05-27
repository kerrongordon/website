import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Portfolio } from '../../../config/interface/portfolio';

@Injectable()
export class PortfoliosService {

  public listPortfolios: FirebaseListObservable<Portfolio[]>
  public portfolioObject: FirebaseObjectObservable<Portfolio>

  constructor(
    private _angularFireDatabase: AngularFireDatabase,
  ) { }

  public getListPortfolios() {
    return this.listPortfolios = this._angularFireDatabase.list('portfolios') as FirebaseListObservable<Portfolio[]>;
  }

  public getPortfolioObject(key) {
    return this.portfolioObject = this._angularFireDatabase.object('portfolios/' + key) as FirebaseObjectObservable<Portfolio>;
  }

}