import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { CardModule } from '../card/card.module';

@NgModule({
  imports: [
    CommonModule,
    CardModule,
  ],
  declarations: [SearchComponent],
  exports: [SearchComponent]
})
export class SearchModule { }
