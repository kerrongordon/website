import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddportfolioComponent } from './addportfolio/addportfolio.component';
import { BtnModule } from '../../components/btn/btn.module';
import { CardModule } from '../../components/card/card.module';
import { ProgressbarModule } from '../../components/progressbar/progressbar.module';
import { DialogModule } from '../../components/dialog/dialog.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BtnModule,
    CardModule,
    ProgressbarModule,
    ReactiveFormsModule,
    DialogModule,
    RouterModule.forChild([
      { path: '', component: AddportfolioComponent }
    ])
  ],
  declarations: [AddportfolioComponent]
})
export class AddportfolioModule { }
