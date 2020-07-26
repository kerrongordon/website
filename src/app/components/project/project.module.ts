import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from './project.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ProjectComponent],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [ProjectComponent]
})
export class ProjectModule { }
