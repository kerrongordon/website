import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { PortfoliosService } from '../../../services/firebase/portfolios/portfolios.service';
import { MarkdownService } from '../../../services/markdown.service';
import { Portfolio } from '../../../config/interface/portfolio';
import { Title } from '@angular/platform-browser';
import { AppService } from '../../../services/app.service';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'kg-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.sass'],
  providers: [PortfoliosService, MarkdownService, AppService, AuthService]
})
export class PortfolioComponent implements OnInit, OnDestroy {
  
  public isAuth: any;
  private id: string;
  public portfolio: Portfolio;
  public mdOutput: string;

  constructor(
    public _title: Title,
    private _appService: AppService,
    private _portfoliosService: PortfoliosService,
    private _router: Router,
    private _authService: AuthService,
    private _activatedRoute: ActivatedRoute,
    private _markdownService: MarkdownService
  ) { }

  ngOnInit() {
    this.updateMe();
    this.amilogin();
    window.scroll(0, 0);
    this._router.events.subscribe(() => this.updateMe());
  }

  private updateMe() {
    this.id = this._activatedRoute.snapshot.params['id'];
    return this._portfoliosService.getPortfolioObject(this.id).subscribe(data => {
      this.portfolio = data;
      this.mdOutput = this._markdownService.convert(data.markdown);
    });
  }

  public editPortfolio(key) {
    return this._appService.goToPortfolioEditPage(key);
  }

  private amilogin() {
    return this._authService.isAuth().authState.subscribe(data => this.isAuth = data);
  }

  ngOnDestroy() {
    this.updateMe().unsubscribe();
  }

}
