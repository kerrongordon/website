import { Component, OnInit, OnDestroy } from '@angular/core';
import { DatabaseService } from '../../services/database.service';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'kg-portfolios',
  templateUrl: './portfolios.component.html',
  styleUrls: ['./portfolios.component.sass'],
  providers: [DatabaseService, AppService]
})
export class PortfoliosComponent implements OnInit, OnDestroy {

  public title: string;
  public portfolios: any[];
  public searchTitle: any[];
  public searchMarkdown: any[];
  public searchInfo: any[];
  public pageTitle = 'Portfolios';

  constructor(private db: DatabaseService, private as: AppService) { }

  ngOnInit() {
    this.portfoliosData();
  }

  portfoliosData() {
    return this.db.getPortfolios().subscribe(data => this.portfolios = data.slice().reverse());
  }

  openPortfolio(key): void {
    return this.as.goToPortfolioPage(key);
  }

  public searchValue(event) {
    if (event === '' || event === null || event === undefined) {
        this.resetSearch();
       } else {
        this.searchTitle = this.portfolios.filter(sh => sh.title.toLowerCase().indexOf(event) > -1);
        this.searchMarkdown = this.portfolios.filter(sh => sh.markdown.toLowerCase().indexOf(event) > -1);
        this.searchInfo = this.portfolios.filter(sh => sh.info.toLowerCase().indexOf(event) > -1);
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
    this.portfoliosData().unsubscribe();
  }

}
