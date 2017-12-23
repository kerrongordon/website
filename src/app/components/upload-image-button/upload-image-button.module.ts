import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { UploadImageButtonComponent } from './upload-image-button.component'
import { ProgressbarModule } from '../progressbar/progressbar.module'

@NgModule({
  imports: [
    CommonModule,
    ProgressbarModule
  ],
  declarations: [UploadImageButtonComponent],
  exports: [UploadImageButtonComponent]
})
export class UploadImageButtonModule { }
