import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareComponent } from './share/share.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ShareComponent],
  exports: [ShareComponent]
})
export class ShareModule { }
