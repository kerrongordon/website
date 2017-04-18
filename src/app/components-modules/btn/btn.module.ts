import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BtnComponent } from './btn/btn.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BtnComponent],
  exports: [BtnComponent]
})
export class BtnModule { }
