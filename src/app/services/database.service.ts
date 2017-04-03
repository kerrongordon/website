import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { Router } from '@angular/router';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import * as firebase from 'firebase';

@Injectable()
export class DatabaseService {

  private nameAndDescription: FirebaseObjectObservable<any>;
  private Skills: FirebaseListObservable<any[]>;
  private portfolios: FirebaseListObservable<any[]>;
  private portfolio: FirebaseObjectObservable<any>;
  private folder = 'portfolios';
  private storageRef: any;

  public thumbnail: string;
  public thumbnailPath: string;
  public image: string;
  public imagePath: string;

  private thunbI: any;
  private deskI: any;


  constructor(public af: AngularFire, private rt: Router, private http: Http) { }

  public getNameAndDescription() {
    return this.nameAndDescription = this.af.database.object('siteInfor') as FirebaseObjectObservable<NameAndDescription>;
  }

  public getSkills() {
    return this.Skills = this.af.database.list('skills') as FirebaseListObservable<Skill[]>;
  }

  public getPortfolios() {
    return this.portfolios = this.af.database.list('portfolios') as FirebaseListObservable<any[]>;
  }

  public getPortfolioDetails(id) {
    return this.portfolio = this.af.database.object('portfolios/' + id) as FirebaseObjectObservable<any>;
  }

  public loadFirebaseStorage() {
    this.storageRef = firebase.storage().ref();
  }

  public postEmail(data) {
    console.log(data);
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
      for (const selectedFile of [(<HTMLInputElement>document.getElementById('thumbnail')).files[0]]) {
        const path = `/${this.folder}/${portfolio.title}/thumbnail/${selectedFile.name}`;
        const iRef = this.storageRef.child(path);
        return this.thunbI = iRef.put(selectedFile).then((snapshot) => {
          portfolio.thumbnail = snapshot.metadata.name;
          portfolio.thumbnailPath = snapshot.downloadURL;
        });
      }
  }

  private addDesktopImage(portfolio) {
    for (const selectedFile of [(<HTMLInputElement>document.getElementById('desktopImage')).files[0]]) {
      const path = `/${this.folder}/${portfolio.title}/desktopImage/${selectedFile.name}`;
      const iRef = this.storageRef.child(path);
      return this.deskI = iRef.put(selectedFile).then((snapshot) => {
        portfolio.image = snapshot.metadata.name;
        portfolio.imagePath = snapshot.downloadURL;
      });
    }
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
