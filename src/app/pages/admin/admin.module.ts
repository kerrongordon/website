import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { CardModule } from '../../components/card/card.module';
import { BtnModule } from '../../components/btn/btn.module';
import { DialogModule } from '../../components/dialog/dialog.module';
import { CardContentModule } from '../../components/card/card-content.module';
import { CardInforModule } from '../../components/card/card-infor.module';

@NgModule({
  imports: [
    CommonModule,
    CardModule,
    CardContentModule,
    CardInforModule,
    BtnModule,
    DialogModule,
    RouterModule.forChild([
      { path: '', component: AdminComponent }
    ])
  ],
  declarations: [AdminComponent]
})
export class AdminModule { }
