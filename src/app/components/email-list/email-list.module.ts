import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { EmailListComponent } from './email-list.component'

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [EmailListComponent],
  exports: [EmailListComponent]
})
export class EmailListModule { }
