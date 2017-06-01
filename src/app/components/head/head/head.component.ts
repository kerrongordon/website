import { Component, OnInit, Output, Input, EventEmitter, ChangeDetectionStrategy, AfterContentInit, HostListener } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from '../../../services/app.service';
import { AuthService } from '../../../services/auth.service';
import { NotificationService } from '../../../services/notification/notification.service';

@Component({
  selector: 'kg-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.sass'],
  providers: [AppService, AuthService, NotificationService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeadComponent implements OnInit, AfterContentInit {

  @Input() title: string;

  @Output() searchValue = new EventEmitter;
  @Output() clearSearch = new EventEmitter;
  @Output() closemenu  = new EventEmitter;

  public inputFocusRibban: string;
  public inputFocusPort: string;
  public toggleMenuClass: string;
  public searchInfo: string;
  public wait: any;
  public inputFoucs = '';
  public toggleheaderbar: string;

  public toggleLogin: boolean = false;

  private scrollToTop = 75;

  public complexForm: FormGroup;

  @HostListener('window:scroll', ['$event'])
    onWindowScroll(event) {
      if (window.pageYOffset < 74 ) {  return this.toggleheaderbar = ''; }
      this.getScrollInfor();
    }

  constructor(
    private _router: Router,
    private _appService: AppService,
    private _authService: AuthService,
    private _formBuilder: FormBuilder,
    private _notificationService: NotificationService
  ) { 
    this.complexForm = _formBuilder.group({
      'email': [null, Validators.compose([Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')])],
      'pass': [null, Validators.compose([Validators.required, Validators.minLength(8)])]
    });
  }

  ngOnInit() { }

  public toggleLoginDialog() {
    return this.toggleLogin = true;
  }

  public login(event: any, isValid: Boolean) {
    if (!isValid) { return }
     this.toggleLogin = false;
    return this._authService.loginWithEmail(event.email, event.pass)
      .then(success => {this._router.navigate(['/admin']); console.log('loging in')})
      .catch(err => this._notificationService.notifitem('error', err.name, err.message, true));
  }

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
