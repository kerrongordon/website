import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { PortfoliosService } from '../../../services/firebase/portfolios/portfolios.service';
import { MarkdownService } from '../../../services/markdown.service';
import { Portfolio } from '../../../config/interface/portfolio';
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'kg-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.sass'],
  providers: [PortfoliosService, MarkdownService]
})
export class PortfolioComponent implements OnInit, OnDestroy {

  private id: String;
  public portfolio: any;
  public mdOutput: String;
  public tpggleImge = 'hideImage';
  public tpggleThum = '';

  constructor(
    private _portfoliosService: PortfoliosService,
    private router: Router,
    private route: ActivatedRoute,
    private md: MarkdownService
  ) { }

  ngOnInit(): void {
    this.updateMe();
    this.router.events.subscribe(() => this.updateMe());
  }

  updateMe(): Subscription {
    this.id = this.route.snapshot.params['id'];
    return this._portfoliosService.getPortfolioObject(this.id).subscribe(data => {
      this.portfolio = data;
      this.mdOutput = this.md.convert(data.markdown);
    });
  }

  ImageLoadedd(): void {
    this.tpggleImge = !this.tpggleImge ? 'hideImage' : 'showImage';
    this.tpggleThum = !this.tpggleThum ? 'hideImage' : 'hideImage';
  }

  LoadDefault(): String {
    return this.portfolio.imagePath = this.portfolio.desktopBase64;
  }

  ngOnDestroy(): void {
    this.updateMe().unsubscribe();
  }

}
