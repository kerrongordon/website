import { Component, OnInit, HostBinding } from '@angular/core';
import { fallIn } from '../../router.animations';

@Component({
  selector: 'kg-portfolio-card',
  templateUrl: './portfolio-card.component.html',
  styleUrls: ['./portfolio-card.component.sass'],
  animations: [fallIn()]
})
export class PortfolioCardComponent implements OnInit {

  // @HostBinding('@fallIn') get fallIn() { return ''; }

  constructor() { }

  ngOnInit() {
  }

}
