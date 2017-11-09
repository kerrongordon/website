import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CinzelDirective } from './cinzel.directive'

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CinzelDirective],
  exports: [CinzelDirective]
})
export class CinzelModule { }
