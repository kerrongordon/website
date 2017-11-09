import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ProgressbarComponent } from './progressbar.component'

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [ProgressbarComponent],
  exports: [ProgressbarComponent]
})
export class ProgressbarModule { }
