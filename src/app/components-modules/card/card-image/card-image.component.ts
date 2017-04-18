import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'kg-card-image',
  templateUrl: './card-image.component.html',
  styleUrls: ['./card-image.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardImageComponent implements OnInit {

  @Input() image: string;

  constructor() { }

  ngOnInit() {
  }

}
