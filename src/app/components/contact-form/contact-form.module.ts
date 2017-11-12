import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FlexLayoutModule } from '@angular/flex-layout'
import { ReactiveFormsModule } from '@angular/forms'
import { ContactFormComponent } from './contact-form.component'

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    ReactiveFormsModule
  ],
  declarations: [ContactFormComponent],
  exports: [ContactFormComponent]
})
export class ContactFormModule { }
