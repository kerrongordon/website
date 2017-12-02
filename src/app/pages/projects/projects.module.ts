import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule, Routes } from '@angular/router'
import { FlexLayoutModule } from '@angular/flex-layout'
import { AngularFirestoreModule } from 'angularfire2/firestore'
import { ProjectsComponent } from './projects.component'

import { PrimaryModule } from '../../directives/primary/primary.module'
import { CenterModule } from '../../directives/center/center.module'
import { ContainerModule } from '../../directives/container/container.module'

import { HeroModule } from '../../components/hero/hero.module'
import { CardModule } from '../../components/card/card.module'
import { CardImageModule } from '../../components/card-image/card-image.module'
import { CardContentModule } from '../../components/card-content/card-content.module'
import { FooterModule } from '../../components/footer/footer.module'
import { HeaderBarModule } from '../../components/header-bar/header-bar.module'

const routes: Routes = [
  { path: '', component: ProjectsComponent }
]

@NgModule({
  imports: [
    CommonModule,
    CenterModule,
    PrimaryModule,
    HeaderBarModule,
    HeroModule,
    CardModule,
    CardImageModule,
    CardContentModule,
    FooterModule,
    ContainerModule,
    AngularFirestoreModule,
    FlexLayoutModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ProjectsComponent]
})
export class ProjectsModule { }
