import { Component, OnInit, Input, ChangeDetectionStrategy, HostBinding } from '@angular/core';
import { moveInLeft } from '../../router.animations';

@Component({
  selector: 'kg-portfolio-card-infor',
  templateUrl: './portfolio-card-infor.component.html',
  styleUrls: ['./portfolio-card-infor.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [moveInLeft()]
})
export class PortfolioCardInforComponent implements OnInit {

  // @HostBinding('@moveInLeft') get moveInLeft() { return ''; }

  @Input() data: any;

  constructor() { }

  ngOnInit() {
  }

}
