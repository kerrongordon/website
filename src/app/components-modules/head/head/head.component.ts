import { Component, OnInit, Output, Input, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'kg-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeadComponent implements OnInit {

  @Input() title: string;

  @Output() searchValue = new EventEmitter;
  @Output() clearSearch = new EventEmitter;

  public inputFocusRibban: string;
  public inputFocusPort: string;
  public toggleMenuClass: string;
  public searchInfo: string;
  public wait: any;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  seachFocus(): void {
    if (this.router.url !== '/portofolios') {
      this.inputFocusRibban = 'hzero';
      this.inputFocusPort = 'hport';
      this.searchPortfolios(this.searchInfo);
      this.router.navigateByUrl('/portfolios');
    }
    clearTimeout(this.wait);
  }

  seachBlur(): void {
    this.wait = setTimeout(() => {
      this.inputFocusRibban = '';
      this.inputFocusPort = '';
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

}
