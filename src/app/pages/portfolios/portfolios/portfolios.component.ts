import { Component, OnInit, HostListener, AfterContentChecked, OnDestroy } from '@angular/core';
import { AppService } from '../../../services/app.service';
import { PortfoliosService } from '../../../services/firebase/portfolios/portfolios.service';
import { Portfolio } from '../../../config/interface/portfolio';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'kg-portfolios',
  templateUrl: './portfolios.component.html',
  styleUrls: ['./portfolios.component.sass'],
  providers: [AppService, PortfoliosService]
})
export class PortfoliosComponent implements OnInit, AfterContentChecked, OnDestroy {

  public loadmore: number = 5;
  public portfolios: Portfolio[];

  @HostListener('window:scroll', ['$event'])
    onWindowScroll(event) {
     let clientHeight = document.body.offsetHeight - 772;
     if (window.pageYOffset > clientHeight) {
       return this.loadmoreitem();
     }
    }

  constructor(
    private _title: Title,
    private _appService: AppService,
    private _portfoliosService: PortfoliosService
  ) { }

  ngOnInit() {
    this.setPortfolios();
    this._title.setTitle('My Portfolios');
  }

  private setPortfolios() {
    return this._portfoliosService.getListPortfolios().subscribe(data => this.portfolios = data.reverse());
  }

  public openPortfolio(key) {
    return this._appService.goToPortfolioPage(key);
  }

  public loadmoreitem() {
    if (this.portfolios === undefined || this.loadmore >= this.portfolios.length ) { return }
    return this.loadmore += 5;
  }

  ngAfterContentChecked() {
    if (document.body.scrollHeight === window.innerHeight - 17) {
      return this.loadmoreitem();
    }
  }

  ngOnDestroy() {
    this.setPortfolios().unsubscribe();
  }

}
