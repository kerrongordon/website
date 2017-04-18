import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderBarComponent } from './header-bar/header-bar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HeaderBarComponent],
  exports: [HeaderBarComponent]
})
export class HeaderbarModule { }
