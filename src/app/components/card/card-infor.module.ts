import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardInforComponent } from './card-infor/card-infor.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CardInforComponent],
  exports: [CardInforComponent]
})
export class CardInforModule { }
