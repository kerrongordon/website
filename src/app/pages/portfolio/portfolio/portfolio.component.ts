import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { DatabaseService } from '../../../services/database.service';
import { MarkdownService } from '../../../services/markdown.service';

@Component({
  selector: 'kg-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.sass'],
  providers: [DatabaseService, MarkdownService]
})
export class PortfolioComponent implements OnInit, OnDestroy {

  private id: any;
  public portfolio: any;
  public portfolios: any;
  public mdOutput: string;
  public tpggleImge = 'hideImage';
  public tpggleThum = '';

  constructor(
    private db: DatabaseService,
    private router: Router,
    private route: ActivatedRoute,
    private md: MarkdownService
  ) { }

  ngOnInit() {
    this.updateMe();
    this. getPortfolios();
    this.router.events.subscribe(() => this.updateMe());
  }

  updateMe() {
    this.id = this.route.snapshot.params['id'];
    return this.db.getPortfolioDetails(this.id).subscribe(portfolio => {
      this.portfolio = portfolio;
      this.mdOutput = this.md.convert(portfolio.markdown);
    });
  }

  getPortfolios() {
    return this.db.getPortfolios().subscribe(data => this.portfolios = data);
  }

  ImageLoadedd(): void {
    this.tpggleImge = !this.tpggleImge ? 'hideImage' : 'showImage';
    this.tpggleThum = !this.tpggleThum ? 'hideImage' : 'hideImage';
  } 
  
  LoadDefault(): void {
    this.portfolio.imagePath = this.portfolio.desktopBase64;
  }

  ngOnDestroy() {
    this.updateMe().unsubscribe();
    this.getPortfolios().unsubscribe();
  }

}
