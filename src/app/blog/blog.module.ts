import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { ProjectsComponent } from './projects/projects.component';
import { HeroModule } from './../components/hero/hero.module';
import { ProjectModule } from '../components/project/project.module';

@NgModule({
  declarations: [BlogComponent, ProjectsComponent],
  imports: [CommonModule, BlogRoutingModule, ScullyLibModule, HeroModule, ProjectModule]
})
export class BlogModule { }
