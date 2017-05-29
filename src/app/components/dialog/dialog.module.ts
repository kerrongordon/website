import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogComponent } from './dialog/dialog.component';
import { CardModule } from '../card/card.module';
import { BtnModule } from '../btn/btn.module';

@NgModule({
  imports: [
    CommonModule,
    CardModule,
    BtnModule
  ],
  declarations: [DialogComponent],
  exports: [DialogComponent]
})
export class DialogModule { }
