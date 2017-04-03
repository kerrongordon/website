import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderbarComponent } from './headerbar/headerbar.component';
import { FooterComponent } from './footer/footer.component';
import { PortfolioCardComponent } from './portfolio-card/portfolio-card.component';
import { PortfolioCardImageComponent } from './portfolio-card-image/portfolio-card-image.component';
import { PortfolioCardInforComponent } from './portfolio-card-infor/portfolio-card-infor.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FooterComponent, HeaderbarComponent, PortfolioCardComponent, PortfolioCardImageComponent, PortfolioCardInforComponent],
  exports: [FooterComponent, HeaderbarComponent, PortfolioCardComponent, PortfolioCardImageComponent, PortfolioCardInforComponent]
})
export class ComponentModule { }
