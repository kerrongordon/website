import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import * as firebase from 'firebase';

@Injectable()
export class AddPortfolioService {

  private folder = 'portfolios';
  private storageRef: any;
  private uploadImage: any;
  private image: any;

  public listPortfolios: FirebaseListObservable<any>

  constructor(private _angularFireDatabase: AngularFireDatabase) { }

  public ListPortfoliosItems() {
    return this.listPortfolios = this._angularFireDatabase.list('portfolios') as FirebaseListObservable<any>;
  }

  public loadFirebaseStorage() {
    return this.storageRef = firebase.storage().ref();
  }

  public addPortfolio(portfolio) {

    this.addImage(portfolio, 'thumb' , 'thumbnail');
    this.addImage(portfolio, 'larg' , 'largImage');

    Promise.all([
      this.uploadImage
    ]).then(value => {
      this.listPortfolios.push(portfolio);
    }).catch(error => console.log(error));

  }


  private addImage(portfolio, dir, type) {
    if (type === 'thumbnail') {
      this.image = portfolio.thumbnail.image;
    }

    if (type === 'largImage' ) {
      this.image = portfolio.largImage.image;
    }

    const path = `/${this.folder}/${portfolio.title}/${dir}/${this.image.name}`;
    const iRef = this.storageRef.child(path).put(this.image);
    return this.uploadImage = iRef.then(snapshot => {

      if (type === 'thumbnail') {
        portfolio.thumbnail.url = snapshot.downloadURL;
        portfolio.thumbnail.name = snapshot.metadata.name;
      }
      if (type === 'largImage') {
        portfolio.largImage.url = snapshot.downloadURL;
        portfolio.largImage.name = snapshot.metadata.name;
      }

    });
  }

}
