import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeadComponent } from './head/head.component';
import { RibbanModule } from '../ribban/ribban.module';
import { HeaderbarModule } from '../headerbar/headerbar.module';
import { BtnModule } from '../btn/btn.module';
import { MenubarModule } from '../menubar/menubar.module';
import { CardModule } from '../card/card.module';
import { TitleModule } from '../title/title.module';
import { DialogModule } from '../dialog/dialog.module';


@NgModule({
  imports: [
    CommonModule,
    RibbanModule,
    HeaderbarModule,
    BtnModule,
    MenubarModule,
    CardModule,
    TitleModule,
    DialogModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    HeadComponent
  ],
  exports : [
    HeadComponent
  ]
})
export class HeadModule { }
