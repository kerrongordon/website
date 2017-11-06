import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { HomeComponent } from './home/home.component'

import { PrimaryModule } from '../../directives/primary/primary.module'
import { CenterModule } from '../../directives/center/center.module'
import { ContainerModule } from '../../directives/container/container.module'
import { CinzelModule } from '../../directives/cinzel/cinzel.module'

import { HeroModule } from '../../components/hero/hero.module'
import { AvatarModule } from '../../components/avatar/avatar.module'
import { DescriptionModule } from '../../components/description/description.module'

@NgModule({
  imports: [
    CommonModule,
    PrimaryModule,
    CenterModule,
    ContainerModule,
    CinzelModule,
    HeroModule,
    AvatarModule,
    DescriptionModule,
    RouterModule.forChild([
      { path: '', component: HomeComponent }
    ])
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
