import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { EshadowDirective } from './eshadow.directive'

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [EshadowDirective],
  exports: [EshadowDirective]
})
export class EshadowModule { }
