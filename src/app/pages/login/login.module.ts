import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HeadModule } from '../../components/head/head.module';
import { FooterModule } from '../../components/footer/footer.module';

@NgModule({
  imports: [
    CommonModule,
    HeadModule,
    FooterModule,
    RouterModule.forChild([
      { path: '', component: LoginComponent }
    ])
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
