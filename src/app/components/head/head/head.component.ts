import { Component, OnInit, Output, Input, EventEmitter, ChangeDetectionStrategy, AfterContentInit } from '@angular/core';
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

  constructor(private router: Router, private as: AppService) { }

  ngOnInit() {

  }

  ngAfterContentInit() {
     if (this.router.url === '/portfolios#search') {
       document.getElementById('searchInput').focus();
     }
  }

  seachFocus(): void {
    if (this.router.url !== '/portofolios') {
      this.inputFocusRibban = 'hzero';
      this.inputFocusPort = 'hport';
      this.inputFoucs = 'inputFoucs';
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
      this.clearSearch.emit();
    }, 100);
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
