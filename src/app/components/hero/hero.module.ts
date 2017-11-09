import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HeroComponent } from './hero/hero.component'
import { CinzelModule } from '../../directives/cinzel/cinzel.module'

@NgModule({
  imports: [
    CommonModule,
    CinzelModule
  ],
  declarations: [HeroComponent],
  exports: [HeroComponent]
})
export class HeroModule { }
