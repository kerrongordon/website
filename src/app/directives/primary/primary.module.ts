import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { PrimaryDirective } from './primary.directive'

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PrimaryDirective],
  exports: [PrimaryDirective]
})
export class PrimaryModule { }
