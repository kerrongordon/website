import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeroModule } from './../../components/hero/hero.module';
import { AvatarModule } from './../../components/avatar/avatar.module';
import { DescriptionModule } from './../../components/description/description.module';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HeroModule,
    AvatarModule,
    DescriptionModule,
  ]
})
export class HomeModule { }
