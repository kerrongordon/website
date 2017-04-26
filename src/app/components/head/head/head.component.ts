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

  public ribbanHeight: number;
  public HeroImg = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/4QDMRXhpZgAATU0AKgAAAAgABAEaAAUAAAABAAAAPgEbAAUAAAABAAAARgEoAAMAAAABAAIAAIdpAAQAAAABAAAATgAAAAAAAABIAAAAAQAAAEgAAAABAAiQAAAHAAAABDAyMTCgAAAHAAAABDAxMDCgAQADAAAAAf//AACgAgAEAAAAAQAAAAigAwAEAAAAAQAAAAWiDgAFAAAAAQAAALSiDwAFAAAAAQAAALyiEAADAAAAAQABAAAAAAAAAAAASAAAAAEAAABIAAAAAf/hCIpodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvADw/eHBhY2tldCBiZWdpbj0n77u/JyBpZD0nVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkJz8+Cjx4OnhtcG1ldGEgeG1sbnM6eD0nYWRvYmU6bnM6bWV0YS8nPgo8cmRmOlJERiB4bWxuczpyZGY9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMnPgoKIDxyZGY6RGVzY3JpcHRpb24geG1sbnM6ZXhpZj0naHR0cDovL25zLmFkb2JlLmNvbS9leGlmLzEuMC8nPgogIDxleGlmOlhSZXNvbHV0aW9uPjcyPC9leGlmOlhSZXNvbHV0aW9uPgogIDxleGlmOllSZXNvbHV0aW9uPjcyPC9leGlmOllSZXNvbHV0aW9uPgogIDxleGlmOlJlc29sdXRpb25Vbml0PkluY2g8L2V4aWY6UmVzb2x1dGlvblVuaXQ+CiAgPGV4aWY6Rmxhc2hQaXhWZXJzaW9uPkZsYXNoUGl4IFZlcnNpb24gMS4wPC9leGlmOkZsYXNoUGl4VmVyc2lvbj4KICA8ZXhpZjpYUmVzb2x1dGlvbj43MjwvZXhpZjpYUmVzb2x1dGlvbj4KICA8ZXhpZjpZUmVzb2x1dGlvbj43MjwvZXhpZjpZUmVzb2x1dGlvbj4KICA8ZXhpZjpSZXNvbHV0aW9uVW5pdD5JbmNoPC9leGlmOlJlc29sdXRpb25Vbml0PgogIDxleGlmOkZsYXNoUGl4VmVyc2lvbj5GbGFzaFBpeCBWZXJzaW9uIDEuMDwvZXhpZjpGbGFzaFBpeFZlcnNpb24+CiAgPGV4aWY6WFJlc29sdXRpb24+NzI8L2V4aWY6WFJlc29sdXRpb24+CiAgPGV4aWY6WVJlc29sdXRpb24+NzI8L2V4aWY6WVJlc29sdXRpb24+CiAgPGV4aWY6UmVzb2x1dGlvblVuaXQ+SW5jaDwvZXhpZjpSZXNvbHV0aW9uVW5pdD4KICA8ZXhpZjpGbGFzaFBpeFZlcnNpb24+Rmxhc2hQaXggVmVyc2lvbiAxLjA8L2V4aWY6Rmxhc2hQaXhWZXJzaW9uPgogIDxleGlmOlhSZXNvbHV0aW9uPjcyPC9leGlmOlhSZXNvbHV0aW9uPgogIDxleGlmOllSZXNvbHV0aW9uPjcyPC9leGlmOllSZXNvbHV0aW9uPgogIDxleGlmOlJlc29sdXRpb25Vbml0PkluY2g8L2V4aWY6UmVzb2x1dGlvblVuaXQ+CiAgPGV4aWY6Rmxhc2hQaXhWZXJzaW9uPkZsYXNoUGl4IFZlcnNpb24gMS4wPC9leGlmOkZsYXNoUGl4VmVyc2lvbj4KICA8ZXhpZjpYUmVzb2x1dGlvbj43MjwvZXhpZjpYUmVzb2x1dGlvbj4KICA8ZXhpZjpZUmVzb2x1dGlvbj43MjwvZXhpZjpZUmVzb2x1dGlvbj4KICA8ZXhpZjpSZXNvbHV0aW9uVW5pdD5JbmNoPC9leGlmOlJlc29sdXRpb25Vbml0PgogIDxleGlmOkZsYXNoUGl4VmVyc2lvbj5GbGFzaFBpeCBWZXJzaW9uIDEuMDwvZXhpZjpGbGFzaFBpeFZlcnNpb24+CiAgPGV4aWY6WFJlc29sdXRpb24+NzI8L2V4aWY6WFJlc29sdXRpb24+CiAgPGV4aWY6WVJlc29sdXRpb24+NzI8L2V4aWY6WVJlc29sdXRpb24+CiAgPGV4aWY6UmVzb2x1dGlvblVuaXQ+SW5jaDwvZXhpZjpSZXNvbHV0aW9uVW5pdD4KICA8ZXhpZjpGbGFzaFBpeFZlcnNpb24+Rmxhc2hQaXggVmVyc2lvbiAxLjA8L2V4aWY6Rmxhc2hQaXhWZXJzaW9uPgogIDxleGlmOlhSZXNvbHV0aW9uPjcyPC9leGlmOlhSZXNvbHV0aW9uPgogIDxleGlmOllSZXNvbHV0aW9uPjcyPC9leGlmOllSZXNvbHV0aW9uPgogIDxleGlmOlJlc29sdXRpb25Vbml0PkluY2g8L2V4aWY6UmVzb2x1dGlvblVuaXQ+CiAgPGV4aWY6RXhpZlZlcnNpb24+RXhpZiBWZXJzaW9uIDIuMTwvZXhpZjpFeGlmVmVyc2lvbj4KICA8ZXhpZjpGbGFzaFBpeFZlcnNpb24+Rmxhc2hQaXggVmVyc2lvbiAxLjA8L2V4aWY6Rmxhc2hQaXhWZXJzaW9uPgogIDxleGlmOkNvbG9yU3BhY2U+SW50ZXJuYWwgZXJyb3IgKHVua25vd24gdmFsdWUgNjU1MzUpPC9leGlmOkNvbG9yU3BhY2U+CiAgPGV4aWY6UGl4ZWxYRGltZW5zaW9uPjYwMDA8L2V4aWY6UGl4ZWxYRGltZW5zaW9uPgogIDxleGlmOlBpeGVsWURpbWVuc2lvbj40MDAwPC9leGlmOlBpeGVsWURpbWVuc2lvbj4KICA8ZXhpZjpGb2NhbFBsYW5lWFJlc29sdXRpb24+NzI8L2V4aWY6Rm9jYWxQbGFuZVhSZXNvbHV0aW9uPgogIDxleGlmOkZvY2FsUGxhbmVZUmVzb2x1dGlvbj43MjwvZXhpZjpGb2NhbFBsYW5lWVJlc29sdXRpb24+CiAgPGV4aWY6Rm9jYWxQbGFuZVJlc29sdXRpb25Vbml0PkludGVybmFsIGVycm9yICh1bmtub3duIHZhbHVlIDEpPC9leGlmOkZvY2FsUGxhbmVSZXNvbHV0aW9uVW5pdD4KIDwvcmRmOkRlc2NyaXB0aW9uPgoKPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KPD94cGFja2V0IGVuZD0ncic/Pgr/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wgARCAAFAAgDAREAAhEBAxEB/8QAFAABAAAAAAAAAAAAAAAAAAAACP/EABQBAQAAAAAAAAAAAAAAAAAAAAf/2gAMAwEAAhADEAAAAT0xkn//xAAWEAEBAQAAAAAAAAAAAAAAAAADBAb/2gAIAQEAAQUCfR1jB//EAB0RAAEDBQEAAAAAAAAAAAAAAAIBAxEEEiEiMWH/2gAIAQMBAT8BrG0doybSW1I25JCXwsDgea7Xdu6gx//EABoRAAMAAwEAAAAAAAAAAAAAAAECEQMEIiH/2gAIAQIBAT8B1iU2kycsFXNyyg2h7WNNLd0SSDwm/wD/xAAYEAADAQEAAAAAAAAAAAAAAAABAgMEE//aAAgBAQAGPwLZtmolpWWSC0gRAqkueFFUzRTNBkDZzxMqUk5Fq0c0en//xAAVEAEBAAAAAAAAAAAAAAAAAAAAEf/aAAgBAQABPyGEJFpt0xLgFf8A/9oADAMBAAIAAwAAABBf/8QAGBEBAQADAAAAAAAAAAAAAAAAAREAITH/2gAIAQMBAT8QSVlWhtwVLbgPDN//xAAXEQEBAQEAAAAAAAAAAAAAAAABEQAh/9oACAECAQE/EG8xRsBMQwjrRBc//8QAFBABAAAAAAAAAAAAAAAAAAAAAP/aAAgBAQABPxAHq3ZwavZ0if/Z';

  @HostListener('window:scroll', ['$event'])
    onWindowScroll(event) {
      this.ribbanHeight = document.getElementById('ribban').offsetHeight;
      this.getScrollInfor();
    }

  public inputFocusRibban: string;
  public inputFocusPort: string;
  public toggleMenuClass: string;
  public searchInfo: string;
  public wait: any;
  public inputFoucs = '';
  public toggleheaderbar: string;
  public moveUpScrolling: string;

  constructor(private router: Router, private as: AppService) { }

  ngOnInit() {

  }

  private getScrollInfor() {
    if (document.body.scrollTop >= this.ribbanHeight) {
      this.toggleheaderbar = 'amScrolling';
    } else {
      if (this.router.url != '/portfolios#search') {
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

  ImageLoadedd() {
    this.HeroImg = '/assets/herobg.jpg';
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
