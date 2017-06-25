import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardContentComponent } from './card-content/card-content.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CardContentComponent],
  exports: [CardContentComponent]
})
export class CardContentModule { }
