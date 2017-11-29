import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FlexLayoutModule } from '@angular/flex-layout'
import { HeaderBarComponent } from './header-bar.component'

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule
  ],
  declarations: [HeaderBarComponent],
  exports: [HeaderBarComponent]
})
export class HeaderBarModule { }
