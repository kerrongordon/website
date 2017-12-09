import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

const routes: Routes = [
  { path: '', loadChildren: './pages/home/home.module#HomeModule' },
  { path: 'projects', loadChildren: './pages/projects/projects.module#ProjectsModule' },
  { path: 'project/:id', loadChildren: './pages/project/project.module#ProjectModule' },
  { path: 'admin', loadChildren: './pages/dashboard/dashboard.module#DashboardModule' },
  { path: 'message', loadChildren: './pages/email/email.module#EmailModule' },
  { path: 'addproject', loadChildren: './pages/add-project/add-project.module#AddProjectModule' },
  { path: '**', redirectTo: '', pathMatch: 'full' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
