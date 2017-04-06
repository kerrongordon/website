import { Component, OnInit, HostBinding, OnDestroy } from '@angular/core';
import { AppService } from '../../services/app.service';
import { DatabaseService } from '../../services/database.service';

@Component({
  selector: 'kg-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
  providers: [DatabaseService, AppService]
})
export class HomeComponent implements OnInit, OnDestroy {

  public infor: any;
  public skills: any;
  public portfolios: any;

  constructor(private data: DatabaseService, private as: AppService) { }

  ngOnInit() {
    this.getTitleAndDescription();
    this.getSkills();
    this.getPortfolios();
  }

  private getTitleAndDescription() {
    return this.data.getNameAndDescription().subscribe(infor => this.infor = infor);
  }

  private getSkills() {
    return this.data.getSkills().subscribe(skills => this.skills = skills);
  }

  private getPortfolios() {
    return this.data.getPortfolios().subscribe(data => {
      this.portfolios = data.filter((el, index) => index < 4);
    });
  }

  public handleEmail(event): void {
    this.data.postEmail(event).subscribe();
  }

  public openPortfolios(): void {
    return this.as.goToPortfoliosPage();
  }

  public openPortfolio(key): void {
    return this.as.goToPortfolioPage(key);
  }

  ngOnDestroy() {
    this.getTitleAndDescription().unsubscribe();
    this.getSkills().unsubscribe();
    this.getPortfolios().unsubscribe();
  }

}
