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
  public moveUpScrolling: string;


  public ribbanHeight: number;
  @HostListener('window:scroll', ['$event'])
    onWindowScroll(event) {
      this.ribbanHeight = document.getElementById('ribban').offsetHeight;
      this.getScrollInfor();
    }

  constructor(private router: Router, private as: AppService) { }

  ngOnInit() {

  }

  private getScrollInfor() {
    if (document.body.scrollTop >= this.ribbanHeight) {
      this.toggleheaderbar = 'amScrolling';
    } else {
      if (this.router.url !== '/portfolios#search') {
        this.toggleheaderbar = '';
      }
    }

  }

  ngAfterContentInit() {
     if (this.router.url === '/portfolios#search') {
       document.getElementById('searchInput').focus();
       return this.toggleheaderbar = 'amScrolling';
     }
  }

  seachFocus(): void {
    if (this.router.url !== '/portofolios') {
      this.inputFocusRibban = 'hzero';
      this.inputFocusPort = 'hport';
      this.inputFoucs = 'inputFoucs';
      this.toggleheaderbar = '';
      this.searchPortfolios(this.searchInfo);
      this.router.navigate(['/portfolios'], {fragment: 'search'});
    }
    clearTimeout(this.wait);
  }

  seachBlur(): void {
    this.wait = setTimeout(() => {
      this.inputFocusRibban = '';
      this.inputFocusPort = '';
      this.inputFoucs = '';
      this.toggleheaderbar = '';
      this.clearSearch.emit();
    }, 300);
    this.router.navigate(['/portfolios']);
  }

  toggleMenu(): void {
    this.toggleMenuClass = !this.toggleMenuClass ? 'toggleMenu' : '';
  }

  searchPortfolios(value): void {
    this.searchInfo = value;
    return this.searchValue.emit(value);
  }

  goBack(): void {
    return this.as.goBackToPreviousPage();
  }

}
