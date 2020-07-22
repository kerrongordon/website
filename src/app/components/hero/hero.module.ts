import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero.component';



@NgModule({
  declarations: [HeroComponent],
  imports: [
    CommonModule
  ],
  exports: [HeroComponent]
})
export class HeroModule { }
