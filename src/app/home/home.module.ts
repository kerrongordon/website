import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { HeroComponent } from './components/hero/hero.component';
import { AvatarComponent } from './components/avatar/avatar.component';
import { AboutComponent } from './components/about/about.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ContactComponent } from './components/contact/contact.component';

import { ComponentModule } from '../components/component.module';
import { SkillsComponent } from './components/skills/skills.component';

@NgModule({
  imports: [
    CommonModule,
    ComponentModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: '', component: HomeComponent }
    ])
  ],
  declarations: [
    HomeComponent,
    HeroComponent,
    AvatarComponent,
    AboutComponent,
    PortfolioComponent,
    ContactComponent,
    SkillsComponent
  ]
})
export class HomeModule { }
