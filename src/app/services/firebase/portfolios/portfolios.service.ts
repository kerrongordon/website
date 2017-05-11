import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

@Injectable()
export class PortfoliosService {

  public listPortfolios: FirebaseListObservable<any>
  public portfolioObject: FirebaseObjectObservable<Portfolio>

  constructor(
    private _angularFire: AngularFire
  ) { }

  public getListPortfolios() {
    return this.listPortfolios = this._angularFire.database.list('portfolios') as FirebaseListObservable<any>;
  }

  public getPortfolioObject(key) {
    return this.portfolioObject = this._angularFire.database.object('portfolios/' + key) as FirebaseObjectObservable<Portfolio>;
  }

}

interface Portfolio {
  title: string;
  type: string;
  info: string;
  markdown: string;
}
