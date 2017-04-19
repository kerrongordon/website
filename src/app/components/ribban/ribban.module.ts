import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RibbanComponent } from './ribban/ribban.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [RibbanComponent],
  exports: [RibbanComponent]
})
export class RibbanModule { }
