import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { CardComponent } from './card.component'

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [CardComponent],
  exports: [CardComponent]
})
export class CardModule { }
