import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { AvatarComponent } from './avatar.component'
import { SecondaryModule } from '../../directives/secondary/secondary.module'

@NgModule({
  imports: [
    CommonModule,
    SecondaryModule
  ],
  declarations: [AvatarComponent],
  exports: [AvatarComponent]
})
export class AvatarModule { }
