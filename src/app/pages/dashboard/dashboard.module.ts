import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { AngularFirestoreModule } from 'angularfire2/firestore'
import { DashboardComponent } from './dashboard.component'

@NgModule({
  imports: [
    CommonModule,
    AngularFirestoreModule,
    RouterModule.forChild([
      { path: '', component: DashboardComponent }
    ])
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule { }
