import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'kg-card-image',
  templateUrl: './card-image.component.html',
  styleUrls: ['./card-image.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardImageComponent implements OnInit {

  @Input() image: string;
  @Input() base64: string;
  public fadeInImage = 'hideImg';

  constructor() { }

  ngOnInit() { }

  LoadDefault() {
    this.image = this.base64;
  }

  ImageLoadedd() {
    this.fadeInImage = !this.fadeInImage ? 'hideImg' : '';
  }

}
