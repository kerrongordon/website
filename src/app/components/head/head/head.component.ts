import { Component, OnInit, Output, Input, EventEmitter, ChangeDetectionStrategy, AfterContentInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../../../services/app.service';


@Component({
  selector: 'kg-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.sass'],
  providers: [AppService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeadComponent implements OnInit, AfterContentInit {

  @Input() title: string;

  @Output() searchValue = new EventEmitter;
  @Output() clearSearch = new EventEmitter;

  public inputFocusRibban: string;
  public inputFocusPort: string;
  public toggleMenuClass: string;
  public searchInfo: string;
  public wait: any;
  public inputFoucs = '';
  public toggleheaderbar: string;

  private scrollToTop = 75;

  @HostListener('window:scroll', ['$event'])
    onWindowScroll(event) {
      return this.getScrollInfor();
    }

  constructor(
    private _router: Router,
    private _appService: AppService
  ) { }

  ngOnInit() { }

  private getScrollInfor() {
    if (this.toggleMenuClass !== '') {
      this.toggleMenuClass = '';
    }
    if (window.pageYOffset > this.scrollToTop) {
      this.toggleheaderbar = 'amScrolling';
    } else {
      this.toggleheaderbar = '';
    }
    return this.scrollToTop = window.pageYOffset;
  }

  ngAfterContentInit() {
     if (this._router.url === '/portfolios#search') {
       return document.getElementById('searchInput').focus();
     }
  }

  public seachFocus() {
    if (this._router.url !== '/portofolios') {
      this.inputFocusRibban = 'hzero';
      this.inputFocusPort = 'hport';
      this.inputFoucs = 'inputFoucs';
      this.searchPortfolios(this.searchInfo);
      this._router.navigate(['/portfolios'], {fragment: 'search'});
    }
    return clearTimeout(this.wait);
  }

  public seachBlur() {
    this.wait = setTimeout(() => {
      this.inputFocusRibban = '';
      this.inputFocusPort = '';
      this.inputFoucs = '';
      this.clearSearch.emit();
    }, 300);
    return this._router.navigate(['/portfolios']);
  }

  public toggleMenu() {
    return this.toggleMenuClass = !this.toggleMenuClass ? 'toggleMenu' : '';
  }

  public closeMenu() {
    return this.toggleMenuClass = '';
  }

  public searchPortfolios(value) {
    return this.searchValue.emit(value);
  }

  public goBack() {
    return this._appService.goBackToPreviousPage();
  }

}
