import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsComponent } from './skills/skills.component';
import { ProgressbarModule } from '../progressbar/progressbar.module';

@NgModule({
  imports: [
    CommonModule,
    ProgressbarModule,
  ],
  declarations: [SkillsComponent],
  exports: [SkillsComponent]
})
export class SkillsModule { }
