import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'kg-card-content',
  templateUrl: './card-content.component.html',
  styleUrls: ['./card-content.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardContentComponent implements OnInit {

  @Input() title: string;
  @Input() info: string;

  constructor() { }

  ngOnInit() {
  }

}
