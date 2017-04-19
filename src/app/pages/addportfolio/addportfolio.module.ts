import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AddportfolioComponent } from './addportfolio/addportfolio.component';
import { HeadModule } from '../../components/head/head.module';
import { FooterModule } from '../../components/footer/footer.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HeadModule,
    FooterModule,
    RouterModule.forChild([
      { path: '', component: AddportfolioComponent }
    ])
  ],
  declarations: [AddportfolioComponent]
})
export class AddportfolioModule { }
