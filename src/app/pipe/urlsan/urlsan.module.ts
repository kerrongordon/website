import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UrlsanPipe } from './urlsan.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [UrlsanPipe],
  exports: [UrlsanPipe]
})
export class UrlsanModule { }
