import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { moveInLeft } from '../../router.animations';

@Component({
  selector: 'kg-portfolio-card-infor',
  templateUrl: './portfolio-card-infor.component.html',
  styleUrls: ['./portfolio-card-infor.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [moveInLeft()]
})
export class PortfolioCardInforComponent implements OnInit {

  @Input() data: any;

  constructor() { }

  ngOnInit() { }

}
