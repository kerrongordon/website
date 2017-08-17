import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditPortfolioComponent } from './edit-portfolio/edit-portfolio.component';
import { CardModule } from '../../components/card/card.module';
import { BtnModule } from '../../components/btn/btn.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CardModule,
    BtnModule,
    RouterModule.forChild([
      {path: '', component: EditPortfolioComponent}
    ])
  ],
  declarations: [EditPortfolioComponent]
})
export class EditPortfolioModule { }
