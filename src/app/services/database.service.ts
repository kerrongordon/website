import { Injectable, HostListener } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { Router } from '@angular/router';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import * as firebase from 'firebase';

import { Portfolio } from '../interface/portfolio';

@Injectable()
export class DatabaseService {

  private nameAndDescription: FirebaseObjectObservable<any>;
  private Skills: FirebaseListObservable<any[]>;
  private portfolios: FirebaseListObservable<any[]>;
  private portfolio: FirebaseObjectObservable<Portfolio>;
  private folder = 'portfolios';
  private storageRef: any;

  public thumbnail: string;
  public thumbnailPath: string;
  public image: string;
  public imagePath: string;

  private thunbI: any;
  private deskI: any;

  public thumbnailProgress: number;
  public desktopImageProgress: number;


  constructor(public af: AngularFire, private rt: Router, private http: Http) {
    // this.load();
   }

  // load() {
  //   console.log('i am load');
  //   this.getPortfolios().subscribe(data => {
  //     if ( localStorage.getItem('kgportfolios') === null || localStorage.getItem('kgportfolios') === undefined ) {
  //       console.log('No Portfolios found.......creating....');
  //       localStorage.setItem('kgportfolios', JSON.stringify(data));
  //     } else {
  //       console.log('Loading Portfolios......');
  //     }
  //   });

  // }

  public getNameAndDescription() {
    return this.nameAndDescription = this.af.database.object('siteInfor') as FirebaseObjectObservable<NameAndDescription>;
  }

  public getSkills() {
    return this.Skills = this.af.database.list('skills') as FirebaseListObservable<Skill[]>;
  }

  public getPortfolios() {
    return this.portfolios = this.af.database.list('portfolios') as FirebaseListObservable<Portfolio[]>;
  }

  public getPortfolioDetails(id) {
    return this.portfolio = this.af.database.object('portfolios/' + id) as FirebaseObjectObservable<any>;
  }

  public loadFirebaseStorage() {
    this.storageRef = firebase.storage().ref();
  }

  public postEmail(data) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    return this.http.post('https://formspree.io/kgpsounds.com@gmail.com', data, headers)
      .map((res: Response) => res.json())
      .catch((error) => Observable.throw(error.json().error || 'Server error'));
  }

  public addPortfolio(portfolio) {
    this.addThumbnail(portfolio);
    this.addDesktopImage(portfolio);
    Promise.all([
      this.thunbI,
      this.deskI
    ]).then(value => {
      this.portfolios.push(portfolio);
      this.rt.navigate(['portfolios']);
    });
  }

  private addThumbnail(portfolio) {
    const path = `/${this.folder}/${portfolio.title}/thumbnail/${portfolio.thumbnailfile.name}`;
    const iRef = this.storageRef.child(path).put(portfolio.thumbnailfile);
    return this.thunbI = iRef.then(snapshot => {
      portfolio.thumbnail = snapshot.metadata.name;
      portfolio.thumbnailPath = snapshot.downloadURL;
    });
  }

  private addDesktopImage(portfolio) {
    const path = `/${this.folder}/${portfolio.title}/desktop/${portfolio.desktopImagefile.name}`;
    const iRef = this.storageRef.child(path).put(portfolio.desktopImagefile);
    return this.deskI = iRef.then(snapshot => {
      portfolio.image = snapshot.metadata.name;
      portfolio.imagePath = snapshot.downloadURL;
    });
  }

}

interface NameAndDescription {
  name: string;
  description: string;
}

interface Skill {
  title: string;
  level: number;
}
