import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { ReactiveFormsModule } from '@angular/forms'
import { AddProjectComponent } from './add-project.component'
import { AngularFirestoreModule } from 'angularfire2/firestore'

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AngularFirestoreModule,
    RouterModule.forChild([
      { path: '', component: AddProjectComponent }
    ])
  ],
  declarations: [AddProjectComponent]
})
export class AddProjectModule { }
