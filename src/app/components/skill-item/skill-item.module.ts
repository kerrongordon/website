import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillItemComponent } from './skill-item.component';
import { ProgressbarModule } from '../progressbar/progressbar.module';

@NgModule({
  imports: [
    CommonModule,
    ProgressbarModule
  ],
  declarations: [SkillItemComponent],
  exports: [SkillItemComponent]
})
export class SkillItemModule { }
