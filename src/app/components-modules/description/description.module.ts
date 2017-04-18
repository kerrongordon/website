import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DescriptionComponent } from './description/description.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DescriptionComponent],
  exports: [DescriptionComponent]
})
export class DescriptionModule { }
