import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { CardModule } from '../../components/card/card.module';
import { BtnModule } from '../../components/btn/btn.module';
import { FooterModule } from '../../components/footer/footer.module';

@NgModule({
  imports: [
    CommonModule,
    CardModule,
    BtnModule,
    FormsModule,
    FooterModule,
    RouterModule.forChild([
      { path: '', component: LoginComponent }
    ])
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
