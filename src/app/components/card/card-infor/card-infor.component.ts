import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'kg-card-infor',
  templateUrl: './card-infor.component.html',
  styleUrls: ['./card-infor.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardInforComponent {

  @Input() postDate: number;

}
