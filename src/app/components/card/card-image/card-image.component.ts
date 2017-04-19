import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { errorImage } from '../../../config/class/errorimage';

@Component({
  selector: 'kg-card-image',
  templateUrl: './card-image.component.html',
  styleUrls: ['./card-image.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardImageComponent implements OnInit {

  @Input() image: string;
  public error: string;

  constructor() {
    this.error = errorImage.img;
   }

  ngOnInit() { }

  LoadDefault() {
    this.image = this.error;
  }

}
