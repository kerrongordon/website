import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { ReactiveFormsModule } from '@angular/forms'
import { FlexLayoutModule } from '@angular/flex-layout'
import { AddProjectComponent } from './add-project.component'
import { AngularFirestoreModule } from 'angularfire2/firestore'
import { ContainerModule } from '../../directives/container/container.module'

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    ContainerModule,
    ReactiveFormsModule,
    AngularFirestoreModule,
    RouterModule.forChild([
      { path: '', component: AddProjectComponent }
    ])
  ],
  declarations: [AddProjectComponent]
})
export class AddProjectModule { }
