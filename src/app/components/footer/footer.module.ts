import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component'
import { NotificationModule } from '../notification/notification.module';


@NgModule({
  imports: [
    CommonModule,
    NotificationModule
  ],
  declarations: [FooterComponent],
  exports: [FooterComponent]
})
export class FooterModule { }
