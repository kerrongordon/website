import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { PortfoliosService } from '../../../services/firebase/portfolios/portfolios.service';
import { MarkdownService } from '../../../services/markdown.service';
import { Portfolio } from '../../../config/interface/portfolio';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'kg-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.sass'],
  providers: [PortfoliosService, MarkdownService]
})
export class PortfolioComponent implements OnInit, OnDestroy {

  private id: string;
  public portfolio: Portfolio;
  public mdOutput: string;

  constructor(
    public _title: Title,
    private _portfoliosService: PortfoliosService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private _markdownService: MarkdownService
  ) { }

  ngOnInit() {
    this.updateMe();
    this._router.events.subscribe(() => this.updateMe());
  }

  private updateMe() {
    this.id = this._activatedRoute.snapshot.params['id'];
    return this._portfoliosService.getPortfolioObject(this.id).subscribe(data => {
      this.portfolio = data;
      this.mdOutput = this._markdownService.convert(data.markdown);
    });
  }

  ngOnDestroy() {
    this.updateMe().unsubscribe();
  }

}
