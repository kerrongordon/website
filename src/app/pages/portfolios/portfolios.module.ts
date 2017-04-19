import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PortfoliosComponent } from './portfolios/portfolios.component';

import { CardModule } from '../../components/card/card.module';
import { HeadModule } from '../../components/head/head.module';
import { FooterModule } from '../../components/footer/footer.module';


@NgModule({
  imports: [
    CommonModule,
    CardModule,
    FooterModule,
    HeadModule,
    RouterModule.forChild([
      { path: '', component: PortfoliosComponent }
    ])
  ],
  declarations: [PortfoliosComponent]
})
export class PortfoliosModule { }
