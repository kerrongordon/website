import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthService } from './services/auth.service';

const routes: Routes = [
  { path: '', loadChildren: './pages/home/home.module#HomeModule' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginModule' },
  { path: 'admin', loadChildren: './pages/admin/admin.module#AdminModule', canActivate: [AuthService] },
  { path: 'portfolio/:id', loadChildren: './pages/portfolio/portfolio.module#PortfolioModule' },
  { path: 'addportfolio', loadChildren: './pages/addportfolio/addportfolio.module#AddportfolioModule', canActivate: [AuthService]},
  { path: 'portfolios', loadChildren: './pages/portfolios/portfolios.module#PortfoliosModule' },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthService]
})
export class AppRoutingModule { }


