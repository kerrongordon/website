import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AdminComponent } from './admin/admin.component';
import { HeadModule } from '../../components/head/head.module';
import { CardModule } from '../../components/card/card.module';
import { FooterModule } from '../../components/footer/footer.module';
import { BtnModule } from '../../components/btn/btn.module';

@NgModule({
  imports: [
    CommonModule,
    HeadModule,
    CardModule,
    BtnModule,
    FormsModule,
    FooterModule,
    RouterModule.forChild([
      { path: '', component: AdminComponent }
    ])
  ],
  declarations: [AdminComponent]
})
export class AdminModule { }
