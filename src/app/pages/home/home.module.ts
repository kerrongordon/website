import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';

import { AvatarModule } from '../../components/avatar/avatar.module';
import { DescriptionModule } from '../../components/description/description.module';
import { ProgressbarModule } from '../../components/progressbar/progressbar.module';
import { CardModule } from '../../components/card/card.module';
import { BtnModule } from '../../components/btn/btn.module';
import { FooterModule } from '../../components/footer/footer.module';
import { HeadModule } from '../../components/head/head.module';
import { SocialIconsModule } from '../../components/social-icons/social-icons.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AvatarModule,
    DescriptionModule,
    ProgressbarModule,
    CardModule,
    BtnModule,
    FooterModule,
    HeadModule,
    ReactiveFormsModule,
    SocialIconsModule,
    RouterModule.forChild([
      { path: '', component: HomeComponent }
    ])
  ],
  declarations: [
    HomeComponent
  ]
})
export class HomeModule { }
