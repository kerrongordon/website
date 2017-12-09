import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule, Routes } from '@angular/router'
import { FlexLayoutModule } from '@angular/flex-layout'
import { EmailComponent } from './email.component'
import { AngularFirestoreModule } from 'angularfire2/firestore'

import { TruncateModule } from '../../pipe/truncate/truncate.module'
import { ReversePipe } from '../../pipe/reverse/reverse.pipe'

import { EmailListModule } from '../../components/email-list/email-list.module'
import { EmailListItemModule } from '../../components/email-list-item/email-list-item.module'
import { EmailBodyModule } from '../../components/email-body/email-body.module'
import { AdminBarModule } from '../../components/admin-bar/admin-bar.module'

const routes: Routes = [
  { path: '', component: EmailComponent }
]

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    AngularFirestoreModule,
    TruncateModule,
    EmailListModule,
    EmailListItemModule,
    EmailBodyModule,
    AdminBarModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EmailComponent, ReversePipe]
})
export class EmailModule { }
