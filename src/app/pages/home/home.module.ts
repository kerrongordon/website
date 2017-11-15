import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { FlexLayoutModule } from '@angular/flex-layout'
import { HomeComponent } from './home.component'

import { PrimaryModule } from '../../directives/primary/primary.module'
import { CenterModule } from '../../directives/center/center.module'
import { ContainerModule } from '../../directives/container/container.module'
import { CinzelModule } from '../../directives/cinzel/cinzel.module'

import { HeroModule } from '../../components/hero/hero.module'
import { AvatarModule } from '../../components/avatar/avatar.module'
import { DescriptionModule } from '../../components/description/description.module'
import { SocialIconModule } from '../../components/social-icon/social-icon.module'
import { SkillItemModule } from '../../components/skill-item/skill-item.module'
import { CardModule } from '../../components/card/card.module'
import { CardImageModule } from '../../components/card-image/card-image.module'
import { CardContentModule } from '../../components/card-content/card-content.module'
import { ContactFormModule } from '../../components/contact-form/contact-form.module'
import { FooterModule } from '../../components/footer/footer.module'

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    PrimaryModule,
    CenterModule,
    ContainerModule,
    CinzelModule,
    HeroModule,
    AvatarModule,
    DescriptionModule,
    SocialIconModule,
    SkillItemModule,
    CardModule,
    CardImageModule,
    CardContentModule,
    ContactFormModule,
    FooterModule,
    RouterModule.forChild([
      { path: '', component: HomeComponent }
    ])
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
