import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CardImageComponent } from './card-image.component'

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CardImageComponent],
  exports: [CardImageComponent]
})
export class CardImageModule { }
