import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'kg-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PortfolioComponent implements OnInit {

  @Input() portfolios: any[];

  constructor(private rt: Router) { }

  ngOnInit() { }

  openPortfolios(key) {
    this.rt.navigate(['/portfolios/']);
  }

  openPortfolio(key) {
    this.rt.navigate(['/portfolio/', key]);
  }

}
