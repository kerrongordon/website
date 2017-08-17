import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { PortfoliosService } from '../../../services/firebase/portfolios/portfolios.service';
import { Portfolio } from '../../../config/interface/portfolio';
import { Subscription } from "rxjs";
import { FirebaseObjectObservable } from 'angularfire2/database';
import { MarkdownService } from '../../../services/markdown.service';
import { AppService } from '../../../services/app.service';

@Component({
  selector: 'kg-edit-portfolio',
  templateUrl: './edit-portfolio.component.html',
  styleUrls: ['./edit-portfolio.component.sass'],
  providers: [PortfoliosService, MarkdownService, AppService]
})
export class EditPortfolioComponent implements OnInit, OnDestroy {
  
  public mdOutput: string;
  public portfolioData: FirebaseObjectObservable<Portfolio>;
  public portfolio: Portfolio;
  private id: any;

  constructor(
    public _title: Title,
    private _appService: AppService,
    private _portfoliosService: PortfoliosService,
    private _activatedRoute: ActivatedRoute,
    private _markdownService: MarkdownService,
  ) { }

  ngOnInit() {
    this.getPageId()
    this.lodpageContents()
    this.updateContent()
  }

  private getPageId() {
    return this.id = this._activatedRoute.snapshot.params['id'];
  }

  private lodpageContents() {
    return this._portfoliosService.getPortfolioObject(this.id)
      .subscribe(data => {this.portfolio = data;
        this.renderMarkdown();
        this._title.setTitle('Edit ' + data.title); })
  }

  private updateContent() {
    return this.portfolioData = this._portfoliosService.getPortfolioObject(this.id)
  }

  private renderMarkdown() {
    return this.mdOutput = this._markdownService.convert(this.portfolio.markdown);
  }

  public previewPage(key) {
    return this._appService.goToPortfolioPage(key)
  }

  public editForm() {
    this.renderMarkdown();
    return this.portfolioData.update(
      { 
        title: this.portfolio.title,
        url: this.portfolio.url,
        description: this.portfolio.description,
        markdown: this.portfolio.markdown
      }
    )
  }

  ngOnDestroy() {
    this.lodpageContents().unsubscribe()
  }

}
