import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { EmailComponent } from './email.component'

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: EmailComponent }
    ])
  ],
  declarations: [EmailComponent]
})
export class EmailModule { }
