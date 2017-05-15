import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

@Injectable()
export class PortfoliosService {

  public listPortfolios: FirebaseListObservable<any>
  public portfolioObject: FirebaseObjectObservable<Portfolio>

  constructor(
    private _angularFireDatabase: AngularFireDatabase,
  ) { }

  public getListPortfolios() {
    return this.listPortfolios = this._angularFireDatabase.list('portfolios') as FirebaseListObservable<any>;
  }

  public getPortfolioObject(key) {
    return this.portfolioObject = this._angularFireDatabase.object('portfolios/' + key) as FirebaseObjectObservable<Portfolio>;
  }

}

interface Portfolio {
  title: string;
  type: string;
  info: string;
  markdown: string;
}
