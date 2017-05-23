import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialIconsComponent } from './social-icons/social-icons.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SocialIconsComponent],
  exports: [SocialIconsComponent]
})
export class SocialIconsModule { }
