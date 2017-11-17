import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

const routes: Routes = [
  { path: '', loadChildren: './pages/home/home.module#HomeModule' },
  { path: 'dashboard',
    children: [
      { path: '', loadChildren: './pages/dashboard/dashboard.module#DashboardModule' },
      { path: 'email', loadChildren: './pages/email/email.module#EmailModule' }
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
