import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { EmailBodyComponent } from './email-body.component'

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [EmailBodyComponent],
  exports: [EmailBodyComponent]
})
export class EmailBodyModule { }
