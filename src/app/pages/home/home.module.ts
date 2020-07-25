import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeroModule } from './../../components/hero/hero.module';
import { AvatarModule } from './../../components/avatar/avatar.module';
import { DescriptionModule } from './../../components/description/description.module';
import { SocialIconModule } from './../../components/social-icon/social-icon.module';
import { SkillItemModule } from './../../components/skill-item/skill-item.module';
import { ProjectComponent } from './project/project.component';
import { ContactFormModule } from './../../components/contact-form/contact-form.module';


@NgModule({
  declarations: [HomeComponent, ProjectComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HeroModule,
    AvatarModule,
    DescriptionModule,
    SocialIconModule,
    SkillItemModule,
    ContactFormModule,
  ]
})
export class HomeModule { }
