import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { AuthService } from './services/auth/auth.service'

const routes: Routes = [
  { path: '', loadChildren: './pages/home/home.module#HomeModule' },
  { path: 'projects', loadChildren: './pages/projects/projects.module#ProjectsModule' },
  { path: 'project/:id', loadChildren: './pages/project/project.module#ProjectModule' },
  { path: 'admin', loadChildren: './pages/dashboard/dashboard.module#DashboardModule', canActivate: [AuthService] },
  { path: 'message', loadChildren: './pages/email/email.module#EmailModule', canActivate: [AuthService] },
  { path: 'addproject', loadChildren: './pages/add-project/add-project.module#AddProjectModule', canActivate: [AuthService] },
  { path: 'login', loadChildren: './pages/login/login.module#LoginModule' },
  { path: '**', redirectTo: '', pathMatch: 'full' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [AuthService],
  exports: [RouterModule]
})
export class AppRoutingModule { }
