import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AddportfolioComponent } from './addportfolio/addportfolio.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: '', component: AddportfolioComponent }
    ])
  ],
  declarations: [AddportfolioComponent]
})
export class AddportfolioModule { }
