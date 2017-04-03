import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { DatabaseService } from '../../services/database.service';
import { MarkdownService } from '../../services/markdown.service';

@Component({
  selector: 'kg-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.sass'],
  providers: [DatabaseService, MarkdownService]
})
export class PortfolioComponent implements OnInit {

  private id: any;
  public portfolio: any;
  public mdOutput: string;

  constructor(
    private db: DatabaseService,
    private router: Router,
    private route: ActivatedRoute,
    private md: MarkdownService
  ) { }

  ngOnInit() {

    this.id = this.route.snapshot.params['id'];

    this.db.getPortfolioDetails(this.id).subscribe(portfolio => {
      this.portfolio = portfolio;
      this.mdOutput = this.md.convert(portfolio.markdown);
    });

  }


}
