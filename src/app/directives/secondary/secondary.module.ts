import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecondaryDirective } from './secondary.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SecondaryDirective],
  exports: [SecondaryDirective]
})
export class SecondaryModule { }
