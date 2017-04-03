import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';

import { AddportfolioComponent } from '../../addportfolio/addportfolio/addportfolio.component';

@Component({
  selector: 'kg-headerbar',
  templateUrl: './headerbar.component.html',
  styleUrls: ['./headerbar.component.sass']
})
export class HeaderbarComponent implements OnInit {

  public auth: any;

  constructor(private af: AngularFire, private router: Router, private lcat: Location) { }

  ngOnInit() {
    this.af.auth.subscribe(data => this.auth = data);
  }

  goBack(): void {
    this.lcat.back();
  }

  goToAddNewPortfolio() {
    this.router.navigateByUrl('/addportfolio');
  }

  login(): void {
    this.router.navigateByUrl('/login');
  }

  goHome(): void {
    this.router.navigateByUrl('');
  }

  goAdmin(): void {
    this.router.navigateByUrl('/admin');
  }

  goPortfolios(): void {
    this.router.navigateByUrl('/portfolios');
  }

  logout(): void {
    this.af.auth.logout();
    this.login();
  }

}
