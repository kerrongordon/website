import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CenterDirective } from './center.directive'

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CenterDirective],
  exports: [CenterDirective]
})
export class CenterModule { }
