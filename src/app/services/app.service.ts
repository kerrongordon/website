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

  public goToHomePage() {
    return this.router.navigateByUrl('');
  }

  public goToLoginPage() {
    return this.router.navigateByUrl('/login');
  }

  public goToAdminPage() {
    return this.router.navigateByUrl('/admin');
  }

  public goToPortfoliosPage() {
    return this.router.navigateByUrl('/portfolios');
  }

  public goToAddNewPortfolioPage() {
    return this.router.navigateByUrl('/addportfolio');
  }

  public goToPortfolioPage(key) {
    return this.router.navigate(['/portfolio/', key]);
  }

  public goBackToPreviousPage() {
    return this._location.back();
  }

}
