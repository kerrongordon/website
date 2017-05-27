import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase';

@Injectable()
export class AddPortfolioService {

  private folder = 'portfolios';
  private uploadImage: any;
  private image: any;
  private fStorage: any;

  constructor(
    private router: Router
  ) { }

  public addPortfolio(portfolio, portfolioList) {

    Promise.all([
      this.addImage(portfolio, 'thumb' , 'thumbnail'),
      this.addImage(portfolio, 'larg' , 'largImage')
    ]).then(value => {
      portfolioList.push(portfolio);
    }).then(value => {
      this.router.navigateByUrl('/portfolios');
    }).catch(error => console.log(error));

  }

  private addImage(portfolio, dir, type) {

    if (type === 'thumbnail') {
      this.image = portfolio.thumbnail.image;
    }

    if (type === 'largImage' ) {
      this.image = portfolio.largImage.image;
    }

    const storageRef = firebase.storage().ref();
    const path = `/${this.folder}/${portfolio.title}/${dir}/${this.image.name}`;
    const iRef = storageRef.child(path).put(this.image);
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