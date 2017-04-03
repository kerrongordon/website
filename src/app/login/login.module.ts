import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ComponentModule } from '../components/component.module';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    CommonModule,
    ComponentModule,
    RouterModule.forChild([
      { path: '', component: LoginComponent }
    ])
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
