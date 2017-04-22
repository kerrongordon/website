import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PortfolioComponent } from './portfolio/portfolio.component';
import { HeadModule } from '../../components/head/head.module';
import { CardModule } from '../../components/card/card.module';
import { FooterModule } from '../../components/footer/footer.module';

@NgModule({
  imports: [
    CommonModule,
    HeadModule,
    CardModule,
    FooterModule,
    RouterModule.forChild([
      { path: '', component: PortfolioComponent }
    ])
  ],
  declarations: [PortfolioComponent]
})
export class PortfolioModule { }
