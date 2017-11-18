import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CardContentComponent } from './card-content.component'
import { TruncateModule } from '../../pipe/truncate/truncate.module'

@NgModule({
  imports: [
    CommonModule,
    TruncateModule
  ],
  declarations: [CardContentComponent],
  exports: [CardContentComponent]
})
export class CardContentModule { }
