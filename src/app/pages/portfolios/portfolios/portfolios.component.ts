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

  public title: String;
  public portfolios: any[];
  public searchTitle: any[];
  public searchMarkdown: any[];
  public searchInfo: any[];
  public pageTitle = 'Portfolios';

  constructor(
    private _appService: AppService,
    private _portfoliosService: PortfoliosService
  ) { }

  ngOnInit() {
    this.setPortfolios();
  }

  private setPortfolios() {
    return this._portfoliosService.getListPortfolios().subscribe(data => this.portfolios = data.slice().reverse());
  }

  openPortfolio(key) {
    return this._appService.goToPortfolioPage(key);
  }

  public searchValue(event) {
    if (event === '' || event === null || event === undefined) {
        this.resetSearch();
       } else {
        const value = event.toLowerCase();
        this.searchTitle = this.portfolios.filter(sh => sh.title.toLowerCase().indexOf(value) > -1).filter((el, index) => index < 4);
        this.searchMarkdown = this.portfolios.filter(sh => sh.markdown.toLowerCase().indexOf(value) > -1).filter((el, index) => index < 4);
        this.searchInfo = this.portfolios.filter(sh => sh.description.toLowerCase().indexOf(value) > -1).filter((el, index) => index < 4);
        return;
       }
  }

  private resetSearch(): void {
    this.searchTitle = null;
    this.searchMarkdown = null;
    this.searchInfo = null;
  }

  clearSearch() {
    return this.resetSearch();
  }

  ngOnDestroy() {
    this.setPortfolios().unsubscribe();
  }

}
