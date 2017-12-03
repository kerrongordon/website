import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { Routes, RouterModule } from '@angular/router'
import { FlexLayoutModule } from '@angular/flex-layout'
import { AngularFirestoreModule } from 'angularfire2/firestore'
import { ProjectComponent } from './project.component'

import { PrimaryModule } from '../../directives/primary/primary.module'
import { CenterModule } from '../../directives/center/center.module'
import { ContainerModule } from '../../directives/container/container.module'

import { FooterModule } from '../../components/footer/footer.module'
import { HeroModule } from '../../components/hero/hero.module'
import { HeaderBarModule } from '../../components/header-bar/header-bar.module'
import { CardImageModule } from '../../components/card-image/card-image.module'

import { UrlsanModule } from '../../pipe/urlsan/urlsan.module'

const routes: Routes = [
  { path: '', component: ProjectComponent }
]

@NgModule({
  imports: [
    CommonModule,
    HeaderBarModule,
    HeroModule,
    FooterModule,
    AngularFirestoreModule,
    FlexLayoutModule,
    PrimaryModule,
    CenterModule,
    ContainerModule,
    CardImageModule,
    UrlsanModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ProjectComponent]
})
export class ProjectModule { }
