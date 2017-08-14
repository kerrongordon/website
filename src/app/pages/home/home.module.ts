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
import { SocialIconsModule } from '../../components/social-icons/social-icons.module';

import { SkillsModule } from '../../components/skills/skills.module';
import { CardImageModule } from '../../components/card/card-image.module';
import { CardContentModule } from '../../components/card/card-content.module';
import { CardInforModule } from '../../components/card/card-infor.module';
import { ReversePipe } from '../../pipe/reverse.pipe';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AvatarModule,
    DescriptionModule,
    ProgressbarModule,
    CardModule,
    CardImageModule,
    CardContentModule,
    CardInforModule,
    BtnModule,
    ReactiveFormsModule,
    SocialIconsModule,
    SkillsModule,
    RouterModule.forChild([
      { path: '', component: HomeComponent }
    ])
  ],
  declarations: [
    HomeComponent,
    ReversePipe
  ]
})
export class HomeModule { }
