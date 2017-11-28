import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule, Routes } from '@angular/router'
import { ReactiveFormsModule } from '@angular/forms'
import { FlexLayoutModule } from '@angular/flex-layout'
import { AddProjectComponent } from './add-project.component'
import { AngularFirestoreModule } from 'angularfire2/firestore'
import { ContainerModule } from '../../directives/container/container.module'

const routes: Routes = [
  { path: '', component: AddProjectComponent }
]

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    ContainerModule,
    ReactiveFormsModule,
    AngularFirestoreModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AddProjectComponent]
})
export class AddProjectModule { }
