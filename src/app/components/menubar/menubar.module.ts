import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenubarComponent } from './menubar/menubar.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [MenubarComponent],
  exports: [MenubarComponent]
})
export class MenubarModule { }
