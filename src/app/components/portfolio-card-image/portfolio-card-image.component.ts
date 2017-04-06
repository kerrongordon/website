import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'kg-portfolio-card-image',
  templateUrl: './portfolio-card-image.component.html',
  styleUrls: ['./portfolio-card-image.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PortfolioCardImageComponent {
  @Input() data: Data;
}

interface Data {
  thumbnailPath: string;
}
