import { Component, OnInit, Input, ChangeDetectionStrategy, HostListener, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { AppService } from '../../services/app.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'kg-headerbar',
  templateUrl: './headerbar.component.html',
  styleUrls: ['./headerbar.component.sass'],
  providers: [AppService, AuthService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderbarComponent implements OnInit, AfterViewInit {

  @Input() portfolios: any;

  public auth: any;
  public inputFocus;
  public inputFocus2;
  public currentSectionName;
  public isHeaderBerFixed;

  public searchTitle: any[];
  public searchMarkdown: any[];
  public searchInfo: any[];

  public searchBoxWidth: any;

  constructor(
    private _authService: AuthService,
    private _appService: AppService,
    private rt: Router
  ) { }

  @HostListener('window:scroll', [])
    onWindowScroll() {
        this.currentSectionName = this.getCurrentSectionName();
    }

  @HostListener('window:resize', [])
    onResize() {
      this.getSearchBoxWidth();
    }

  private getCurrentSectionName() {
    if (document.body.scrollTop === 0) {
      return this.isHeaderBerFixed = 'headerIsNotFixed';
    } else {
      return this.isHeaderBerFixed = 'headerIsFixed';
    }
  }

  ngOnInit() {
    this._authService.isAuth().subscribe(data => this.auth = data);
  }

  searchFocus(event) {
    this.inputFocus = !this.inputFocus ? 'menubarhide' : '';
    this.inputFocus2 = !this.inputFocus2 ? 'clearspacehide' : '';
  }

  searchPortfolios(event) {
    if (event === '' || event === null || event === undefined) {
        this.resetSearch();
       } else {
        this.searchTitle = this.portfolios.filter((sh) => { return sh.title.toLowerCase().indexOf(event) > -1; });
        this.searchMarkdown = this.portfolios.filter((sh) => { return sh.markdown.toLowerCase().indexOf(event) > -1; });
        this.searchInfo = this.portfolios.filter((sh) => { return sh.info.toLowerCase().indexOf(event) > -1; });
       }
  }

  resetSearch() {
    this.searchTitle = null;
    this.searchMarkdown = null;
    this.searchInfo = null;
  }

  ngAfterViewInit() {
    this.getSearchBoxWidth();
  }

  getSearchBoxWidth() {
    return this.searchBoxWidth = document.getElementById('search').offsetWidth;
  }

  goHome(): void {
    return this._appService.goToHomePage();
  }

  login(): void {
    return this._appService.goToLoginPage();
  }

  goAdmin(): void {
    return this._appService.goToAdminPage();
  }

  goPortfolios(): void {
    return this._appService.goToPortfoliosPage();
  }

  goToAddNewPortfolio(): void {
    return this._appService.goToAddNewPortfolioPage();
  }

  goBack(): void {
    return this._appService.goBackToPreviousPage();
  }

  logout(): void {
    this._authService.logOut();
    this.login();
  }

  openPortfolio(key): void {
    console.log('key', key);
    this._appService.goToPortfolioPage(key);
    this.resetSearch();
  }

}
