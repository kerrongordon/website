import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { CardImageComponent } from './card-image/card-image.component';
import { CardContentComponent } from './card-content/card-content.component';
import { CardInforComponent } from './card-infor/card-infor.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CardComponent, CardImageComponent, CardContentComponent, CardInforComponent],
  exports: [CardComponent, CardImageComponent, CardContentComponent, CardInforComponent]
})
export class CardModule { }
