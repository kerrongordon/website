import { Component, Input, ViewChild, OnChanges, OnInit, AfterViewInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'kg-card-image',
  templateUrl: './card-image.component.html',
  styleUrls: ['./card-image.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardImageComponent implements AfterViewInit, OnInit, OnChanges {
  private clear;
  private largImage: HTMLImageElement;
  private baseimage: HTMLImageElement;

  @ViewChild('imageId') imageId;
  @Input() image: string;
  @Input() base64: string;

  constructor() {}

  ngOnInit() {
    
  }

  private ImageLoadedd() {
    this.clear = setTimeout(() => {
      this.largImage.src = this.image;
    }, 1000);

    return this.largImage.onload = () => {
      this.baseimage.src = this.largImage.src;
      this.baseimage.classList.add('imgload');
      return clearTimeout(this.clear);
    }
  }

  public ImageError() {
    return this.image = this.base64;
  }

  ngOnChanges() {
    if (this.baseimage) {this.ImageLoadedd()}
  }

  ngAfterViewInit() {
    this.baseimage = this.imageId.nativeElement;
    this.largImage = document.createElement('img');
    this.ImageLoadedd();
  }

}
