import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule, Routes } from '@angular/router'
import { FlexLayoutModule } from '@angular/flex-layout'
// import { AngularFirestoreModule } from 'angularfire2/firestore'
import { DashboardComponent } from './dashboard.component'
import { FooterModule } from '../../components/footer/footer.module'
import { AdminBarModule } from '../../components/admin-bar/admin-bar.module'

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  }
]

@NgModule({
  imports: [
    CommonModule,
    // AngularFirestoreModule,
    FlexLayoutModule,
    FooterModule,
    AdminBarModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule { }
