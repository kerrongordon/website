import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { AvatarComponent } from './avatar.component'
import { SecondaryModule } from '../../directives/secondary/secondary.module'
import { EshadowModule } from '../../directives/eshadow/eshadow.module'

@NgModule({
  imports: [
    CommonModule,
    SecondaryModule,
    EshadowModule
  ],
  declarations: [AvatarComponent],
  exports: [AvatarComponent]
})
export class AvatarModule { }
