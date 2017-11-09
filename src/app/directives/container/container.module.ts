import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ContainerDirective } from './container.directive'

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ContainerDirective],
  exports: [ContainerDirective]
})
export class ContainerModule { }
