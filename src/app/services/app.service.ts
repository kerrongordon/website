import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';

@Injectable()
export class AppService {

  constructor(
    private router: Router,
    private _location: Location
  ) {
    this.router.events.filter(event => event instanceof NavigationEnd).subscribe(event => {
        window.scroll(0, 0);
    });
  }

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

  public goToPortfolioPage(key): void {
    this.router.navigate(['/portfolio/', key]);
  }

  public goBackToPreviousPage(): void {
    this._location.back();
  }

}
