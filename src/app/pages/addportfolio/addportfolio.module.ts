import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddportfolioComponent } from './addportfolio/addportfolio.component';
import { HeadModule } from '../../components/head/head.module';
import { FooterModule } from '../../components/footer/footer.module';
import { BtnModule } from '../../components/btn/btn.module';
import { CardModule } from '../../components/card/card.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HeadModule,
    FooterModule,
    BtnModule,
    CardModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: '', component: AddportfolioComponent }
    ])
  ],
  declarations: [AddportfolioComponent]
})
export class AddportfolioModule { }
