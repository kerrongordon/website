import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule, Routes } from '@angular/router'
import { FlexLayoutModule } from '@angular/flex-layout'
import { AngularFirestoreModule } from 'angularfire2/firestore'
import { DashboardComponent } from './dashboard.component'
import { FooterModule } from '../../components/footer/footer.module'

const routes: Routes = [
  { path: '', component: DashboardComponent }
]

@NgModule({
  imports: [
    CommonModule,
    AngularFirestoreModule,
    FlexLayoutModule,
    FooterModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule { }
