import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { FlexLayoutModule } from '@angular/flex-layout'
import { EmailComponent } from './email.component'
import { AngularFirestoreModule } from 'angularfire2/firestore'
import { TruncateModule } from '../../pipe/truncate/truncate.module'
import { EmailListModule } from '../../components/email-list/email-list.module'
import { EmailListItemModule } from '../../components/email-list-item/email-list-item.module'


@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    AngularFirestoreModule,
    TruncateModule,
    EmailListModule,
    EmailListItemModule,
    RouterModule.forChild([
      { path: '', component: EmailComponent }
    ])
  ],
  declarations: [EmailComponent]
})
export class EmailModule { }
