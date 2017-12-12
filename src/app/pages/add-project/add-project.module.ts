import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule, Routes } from '@angular/router'
import { ReactiveFormsModule } from '@angular/forms'
import { FlexLayoutModule } from '@angular/flex-layout'
import { AddProjectComponent } from './add-project.component'
import { AngularFirestoreModule } from 'angularfire2/firestore'
import { UrlsanModule } from '../../pipe/urlsan/urlsan.module'
import { AdminBarModule } from '../../components/admin-bar/admin-bar.module'

const routes: Routes = [
  { path: '', component: AddProjectComponent }
]

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    AngularFirestoreModule,
    UrlsanModule,
    AdminBarModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AddProjectComponent]
})
export class AddProjectModule { }
