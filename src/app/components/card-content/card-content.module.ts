import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CardContentComponent } from './card-content.component'
import { TruncatePipe } from '../../pipe/truncate/truncate.pipe'

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CardContentComponent, TruncatePipe],
  exports: [CardContentComponent]
})
export class CardContentModule { }
