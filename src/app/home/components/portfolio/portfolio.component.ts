import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'kg-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PortfolioComponent {

  @Input() portfolios: any[];
  @Output() openPortfolios = new EventEmitter;
  @Output() openPortfolio = new EventEmitter;

}

