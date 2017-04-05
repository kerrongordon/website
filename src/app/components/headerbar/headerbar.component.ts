import { Component, OnInit, HostListener, ElementRef, AfterViewInit } from '@angular/core';

import { AppService } from '../../services/app.service';
import { AuthService } from '../../services/auth.service';
import { DatabaseService } from '../../services/database.service';

@Component({
  selector: 'kg-headerbar',
  templateUrl: './headerbar.component.html',
  styleUrls: ['./headerbar.component.sass'],
  providers: [AppService, AuthService, DatabaseService]
})
export class HeaderbarComponent implements OnInit, AfterViewInit {

  public auth: any;
  public inputFocus;
  public inputFocus2;
  public currentSectionName;
  public isHeaderBerFixed;

  public searchTitle: any[];
  public searchMarkdown: any[];
  public searchInfo: any[];

  private searchBoxWidth: any;

  constructor(
    private _authService: AuthService,
    private _appService: AppService,
    private _databaseService: DatabaseService,
    private el: ElementRef
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

  searchFocus() {
    this.inputFocus = !this.inputFocus ? 'menubarhide' : '';
    this.inputFocus2 = !this.inputFocus2 ? 'clearspacehide' : '';
  }

  searchPortfolios(event) {
    this._databaseService.getPortfolios().subscribe(data => {
      this.searchTitle = data.filter((sh) => { return sh.title.toLowerCase().indexOf(event) > -1; });
      this.searchMarkdown = data.filter((sh) => { return sh.markdown.toLowerCase().indexOf(event) > -1; });
      this.searchInfo = data.filter((sh) => { return sh.info.toLowerCase().indexOf(event) > -1; });
      console.log(this.searchTitle);
      console.log(this.searchMarkdown);
      console.log(this.searchInfo);
    });
  }

  ngAfterViewInit() {
    this.getSearchBoxWidth();
  }

  getSearchBoxWidth() {
    this.searchBoxWidth = document.getElementById('search').offsetWidth;
    console.log(this.searchBoxWidth);
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

}
