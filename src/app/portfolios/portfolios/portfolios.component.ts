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

  public portfolios: any[];

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

  ngOnDestroy() {
    this.portfoliosData().unsubscribe();
  }

}
