import { Component, OnInit } from '@angular/core';
import { PortfoliosService } from '../../../services/firebase/portfolios/portfolios.service';
import { Portfolio } from '../../../config/interface/portfolio';
import { AppService } from '../../../services/app.service';

@Component({
  selector: 'kg-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass'],
  providers: [PortfoliosService, AppService]
})
export class SearchComponent implements OnInit {

  delay: any;
  searchInfo: Portfolio[];
  searchTitle: Portfolio[];
  loadDatadase: any;
  portfolios: Portfolio[];

  inputFoucs: string = 'toggle';

  constructor(
    private _appService: AppService,
    private _portfoliosService: PortfoliosService
  ) { }

  ngOnInit() {
  }

  private setPortfolios() {
    return this._portfoliosService.getListPortfolios().subscribe(data => this.portfolios = data.reverse());
  }

  toggleSearchBarClass() {
    this.loadData();
    this.delay = setTimeout(() => {
      this.toggleClass();
      if (this.inputFoucs === 'toggle') { this.resetsearch(); }
      clearTimeout(this.delay);
    }, 200);
  }

  resetsearch() {
    this.searchTitle = null;
    this.searchInfo = null;
  }

  toggleClass() {
    return this.inputFoucs = !this.inputFoucs ? 'toggle' : '';
  }

  loadData() {
    return this.loadDatadase = !this.loadDatadase ? this.setPortfolios() : this.setPortfolios().unsubscribe();
  }

  searchPortfolios(val: string) {
    const value = val.toLowerCase();
    Promise.all([
      this.portfolios
    ])
      .then(() => {
        this.searchTitle = this.portfolios.filter(sh => sh.title.toLowerCase().indexOf(value) > -1).filter((el, index) => index < 6);
        this.searchInfo = this.portfolios.filter(sh => sh.description.toLowerCase().indexOf(value) > -1).filter((el, index) => index < 6);
      })
      .catch((error) => console.log(error))

  }

  openPortfolio(val: string) {
    this.resetsearch();
    return this._appService.goToPortfolioPage(val);
  }

}
