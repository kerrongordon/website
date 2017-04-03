import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthService } from './services/auth.service';

const routes: Routes = [
  { path: '', loadChildren: './home/home.module#HomeModule' },
  { path: 'login', loadChildren: './login/login.module#LoginModule' },
  { path: 'admin', loadChildren: './admin/admin.module#AdminModule', canActivate: [AuthService] },
  { path: 'portfolio/:id', loadChildren: './portfolio/portfolio.module#PortfolioModule' },
  { path: 'addportfolio', loadChildren: './addportfolio/addportfolio.module#AddportfolioModule', canActivate: [AuthService]},
  { path: 'portfolios', loadChildren: './portfolios/portfolios.module#PortfoliosModule' },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthService]
})
export class AppRoutingModule { }
