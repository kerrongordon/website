import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FlexLayoutModule } from '@angular/flex-layout'
import { CardImageComponent } from './card-image.component'

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule
  ],
  declarations: [CardImageComponent],
  exports: [CardImageComponent]
})
export class CardImageModule { }
