import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable, AngularFireAuth } from 'angularfire2';
import { Router } from '@angular/router';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import * as firebase from 'firebase';

import { Portfolio } from '../config/interface/portfolio';

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

  public emailError: any;

  private upLoadhumbnail: any;
  private upLoadDesktopImage: any;

  public thumbnailProgress: number;
  public desktopImageProgress: number;
  public userauth: any;


  constructor(public af: AngularFire, private rt: Router, private http: Http, private auth: AngularFireAuth) {
    // this.getUserId();
  }

  public Users() {
    return this.af.database.list('users') as FirebaseListObservable<any>;
  }

  public getUserId() {
    return this.auth.subscribe(data => this.userauth = data.uid);
  }

  public UserObject(key) {
    return this.af.database.object('users/' + key) as FirebaseObjectObservable<any>;
  }

  public getNameAndDescription() {
    return this.nameAndDescription = this.af.database.object('siteInfor') as FirebaseObjectObservable<NameAndDescription>;
  }

  public getSkills() {
    return this.Skills = this.af.database.list('skills') as FirebaseListObservable<Skill[]>;
  }

  public getSkill(key) {
    return this.af.database.object('skills/' + key) as FirebaseObjectObservable<any>;
  }

  public getPortfolios() {
    if (this.userauth !== null) {
      console.log('i am not null');
      return this.portfolios = this.af.database.list('portfolios/' + this.userauth) as FirebaseListObservable<Portfolio[]>;
    } else {
      console.log('i am null');
      return this.portfolios = this.af.database.list('portfolios') as FirebaseListObservable<Portfolio[]>;
    }
  }

  public getPortfolioDetails(id) {
    return this.portfolio = this.af.database.object('portfolios/' + id) as FirebaseObjectObservable<any>;
  }

  public loadFirebaseStorage() {
    return this.storageRef = firebase.storage().ref();
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
      this.upLoadhumbnail,
      this.upLoadDesktopImage
    ]).then(value => {
      this.portfolios.push(portfolio);
      this.rt.navigate(['portfolios']);
    });
  }

  private addThumbnail(portfolio) {
    const path = `/${this.folder}/${portfolio.title}/thumbnail/${portfolio.thumbnailfile.name}`;
    const iRef = this.storageRef.child(path).put(portfolio.thumbnailfile);
    return this.upLoadhumbnail = iRef.then(snapshot => {
      portfolio.thumbnail = snapshot.metadata.name;
      portfolio.thumbnailPath = snapshot.downloadURL;
      console.log(snapshot);
    });
  }

  private addDesktopImage(portfolio) {
    const path = `/${this.folder}/${portfolio.title}/desktop/${portfolio.desktopImagefile.name}`;
    const iRef = this.storageRef.child(path).put(portfolio.desktopImagefile);
    return this.upLoadDesktopImage = iRef.then(snapshot => {
      portfolio.image = snapshot.metadata.name;
      portfolio.imagePath = snapshot.downloadURL;
      console.log(snapshot);
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
