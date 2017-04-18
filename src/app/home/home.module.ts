import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';

import { AvatarModule } from '../components-modules/avatar/avatar.module';
import { DescriptionModule } from '../components-modules/description/description.module';
import { ProgressbarModule } from '../components-modules/progressbar/progressbar.module';
import { CardModule } from '../components-modules/card/card.module';
import { BtnModule } from '../components-modules/btn/btn.module';
import { FooterModule } from '../components-modules/footer/footer.module';
import { HeadModule } from '../components-modules/head/head.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AvatarModule,
    DescriptionModule,
    ProgressbarModule,
    CardModule,
    BtnModule,
    FooterModule,
    HeadModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: '', component: HomeComponent }
    ])
  ],
  declarations: [
    HomeComponent
  ]
})
export class HomeModule { }
