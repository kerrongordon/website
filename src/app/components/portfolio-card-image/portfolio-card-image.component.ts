import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { fadeInOut } from '../../router.animations';

@Component({
  selector: 'kg-portfolio-card-image',
  templateUrl: './portfolio-card-image.component.html',
  styleUrls: ['./portfolio-card-image.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [fadeInOut()]
})
export class PortfolioCardImageComponent implements OnInit {

  @Input() data: any;

  constructor() { }

  ngOnInit() {
  }

}
