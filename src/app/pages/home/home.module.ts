import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { HomeComponent } from './home/home.component'

import { HeroModule } from '../../components/hero/hero.module'

@NgModule({
  imports: [
    CommonModule,
    HeroModule,
    RouterModule.forChild([
      { path: '', component: HomeComponent }
    ])
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
