import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { EmailListItemComponent } from './email-list-item.component'
import { TruncateModule } from '../../pipe/truncate/truncate.module'

@NgModule({
  imports: [
    CommonModule,
    TruncateModule
  ],
  declarations: [EmailListItemComponent],
  exports: [EmailListItemComponent]
})
export class EmailListItemModule { }
