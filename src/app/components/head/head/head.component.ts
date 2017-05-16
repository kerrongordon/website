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

  private scrollToTop = 0;

  public ribbanHeight: number;
  @HostListener('window:scroll', ['$event'])
    onWindowScroll(event) {
      return this.getScrollInfor();
    }

  constructor(private router: Router, private as: AppService) { }

  ngOnInit() { }


  private getScrollInfor() {
    if (window.pageYOffset > this.scrollToTop) {
      this.toggleheaderbar = 'amScrolling';
    } else {
      this.toggleheaderbar = '';
    }
    return this.scrollToTop = document.body.scrollTop;
  }

  ngAfterContentInit() {
     if (this.router.url === '/portfolios#search') {
       return document.getElementById('searchInput').focus();
     }
  }

  seachFocus() {
    if (this.router.url !== '/portofolios') {
      this.inputFocusRibban = 'hzero';
      this.inputFocusPort = 'hport';
      this.inputFoucs = 'inputFoucs';
      this.searchPortfolios(this.searchInfo);
      this.router.navigate(['/portfolios'], {fragment: 'search'});
    }
    return clearTimeout(this.wait);
  }

  seachBlur() {
    this.wait = setTimeout(() => {
      this.inputFocusRibban = '';
      this.inputFocusPort = '';
      this.inputFoucs = '';
      this.clearSearch.emit();
    }, 300);
    return this.router.navigate(['/portfolios']);
  }

  toggleMenu() {
    return this.toggleMenuClass = !this.toggleMenuClass ? 'toggleMenu' : '';
  }

  searchPortfolios(value) {
    return this.searchValue.emit(value);
  }

  goBack() {
    return this.as.goBackToPreviousPage();
  }

}
