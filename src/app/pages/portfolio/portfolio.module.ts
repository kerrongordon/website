import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PortfolioComponent } from './portfolio/portfolio.component';
import { CardModule } from '../../components/card/card.module';
import { CardImageModule } from '../../components/card/card-image.module';
import { CardInforModule } from '../../components/card/card-infor.module';
import { ShareModule } from '../../components/share/share.module';

@NgModule({
  imports: [
    CommonModule,
    CardModule,
    CardImageModule,
    CardInforModule,
    ShareModule,
    RouterModule.forChild([
      { path: '', component: PortfolioComponent }
    ])
  ],
  declarations: [PortfolioComponent]
})
export class PortfolioModule { }
