import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ComponentModule } from '../components/component.module';
import { PortfolioComponent } from './portfolio/portfolio.component';

@NgModule({
  imports: [
    CommonModule,
    ComponentModule,
    RouterModule.forChild([
      { path: '', component: PortfolioComponent }
    ])
  ],
  declarations: [PortfolioComponent]
})
export class PortfolioModule { }
