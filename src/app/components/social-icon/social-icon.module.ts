import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialIconComponent } from './social-icon.component';
import { FacebookIconComponent } from '../../icons/facebook-icon/facebook.component';
import { TwitterIconComponent } from './../../icons/twitter-icon/twitter-icon.component';
import { LinkedinIconComponent } from './../../icons/linkedin-icon/linkedin-icon.component';
import { GithubIconComponent } from './../../icons/github-icon/github-icon.component';
import { InstagramIconComponent } from './../../icons/instagram-icon/instagram-icon.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SocialIconComponent,
    FacebookIconComponent,
    TwitterIconComponent,
    LinkedinIconComponent,
    GithubIconComponent,
    InstagramIconComponent
  ],
  exports: [SocialIconComponent]
})
export class SocialIconModule { }
