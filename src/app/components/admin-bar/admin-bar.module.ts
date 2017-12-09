import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { AdminBarComponent } from './admin-bar.component'
import { FlexLayoutModule } from '@angular/flex-layout'

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule
  ],
  declarations: [AdminBarComponent],
  exports: [AdminBarComponent]
})
export class AdminBarModule { }
