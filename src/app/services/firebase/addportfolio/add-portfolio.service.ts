import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app'; // for typings
import { FirebaseApp } from 'angularfire2'; // for methods
import 'firebase/storage'; // only import firebase storage

@Injectable()
export class AddPortfolioService {

  private folder = 'portfolios';
  private uploadImage: any;
  private image: any;
  private fStorage: any;
  private storageRef: any;

  private body = document.getElementsByTagName('body');

  constructor(
    private router: Router,
    private _firebaseApp: FirebaseApp
  ) { 
    this.storageRef = _firebaseApp.storage().ref();
   }

  public show() {
    return this.body[0].style.overflow = '';
  }

  public addPortfolio(portfolio, portfolioList) {

    Promise.all([
      this.addImage(portfolio, 'thumb' , 'thumbnail'),
      this.addImage(portfolio, 'larg' , 'largImage')
    ]).then(value => {
      portfolioList.push(portfolio);
    }).then(value => {
      this.router.navigateByUrl('/portfolios');
      this.show();
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