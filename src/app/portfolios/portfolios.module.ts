import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PortfoliosComponent } from './portfolios/portfolios.component';

import { ComponentModule } from '../components/component.module';

@NgModule({
  imports: [
    CommonModule,
    ComponentModule,
    RouterModule.forChild([
      { path: '', component: PortfoliosComponent }
    ])
  ],
  declarations: [PortfoliosComponent]
})
export class PortfoliosModule { }
