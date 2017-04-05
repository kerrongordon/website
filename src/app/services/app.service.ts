import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Injectable()
export class AppService {

  constructor(
    private router: Router,
    private _location: Location
  ) { }

  public goToHomePage(): void {
    this.router.navigateByUrl('');
  }

  public goToLoginPage(): void {
    this.router.navigateByUrl('/login');
  }

  public goToAdminPage(): void {
    this.router.navigateByUrl('/admin');
  }

  public goToPortfoliosPage(): void {
    this.router.navigateByUrl('/portfolios');
  }

  public goToAddNewPortfolioPage(): void {
    this.router.navigateByUrl('/addportfolio');
  }

  public goBackToPreviousPage(): void {
    this._location.back();
  }

}
