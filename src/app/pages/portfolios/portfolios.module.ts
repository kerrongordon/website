import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PortfoliosComponent } from './portfolios/portfolios.component';
import { CardModule } from '../../components/card/card.module';
import { CardImageModule } from '../../components/card/card-image.module';
import { CardContentModule } from '../../components/card/card-content.module';
import { CardInforModule } from '../../components/card/card-infor.module';

@NgModule({
  imports: [
    CommonModule,
    CardModule,
    CardImageModule,
    CardContentModule,
    CardInforModule,
    RouterModule.forChild([
      { path: '', component: PortfoliosComponent }
    ])
  ],
  declarations: [PortfoliosComponent]
})
export class PortfoliosModule { }
