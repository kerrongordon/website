import { Component, OnInit, OnDestroy } from '@angular/core';

import { AppService } from '../../../services/app.service';

import { PortfoliosService } from '../../../services/firebase/portfolios/portfolios.service';

@Component({
  selector: 'kg-portfolios',
  templateUrl: './portfolios.component.html',
  styleUrls: ['./portfolios.component.sass'],
  providers: [AppService, PortfoliosService]
})
export class PortfoliosComponent implements OnInit, OnDestroy {

  public title: string;
  public portfolios: any[];
  public searchTitle: any[];
  public searchMarkdown: any[];
  public searchInfo: any[];
  public pageTitle = 'Portfolios';

  constructor(
    private as: AppService,
    private _portfoliosService: PortfoliosService
  ) { }

  ngOnInit() {
    this.setPortfolios();
  }

  private setPortfolios() {
    return this._portfoliosService.getListPortfolios().subscribe(data => this.portfolios = data.slice().reverse());
  }

  openPortfolio(key) {
    return this.as.goToPortfolioPage(key);
  }

  public searchValue(event) {
    if (event === '' || event === null || event === undefined) {
        this.resetSearch();
       } else {
        const value = event.toLowerCase()
        this.searchTitle = this.portfolios.filter(sh => sh.title.toLowerCase().indexOf(value) > -1).filter((el, index) => index < 4);
        this.searchMarkdown = this.portfolios.filter(sh => sh.markdown.toLowerCase().indexOf(value) > -1).filter((el, index) => index < 4);
        this.searchInfo = this.portfolios.filter(sh => sh.info.toLowerCase().indexOf(value) > -1).filter((el, index) => index < 4);
       }
  }

  private resetSearch(): void {
    this.searchTitle = null;
    this.searchMarkdown = null;
    this.searchInfo = null;
  }

  clearSearch(): void {
    this.resetSearch();
  }

  ngOnDestroy() {
    this.setPortfolios().unsubscribe();
  }

}
