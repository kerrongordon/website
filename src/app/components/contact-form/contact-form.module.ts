import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactFormComponent } from './contact-form.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [ContactFormComponent],
  exports: [ContactFormComponent]
})
export class ContactFormModule { }
