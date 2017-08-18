import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AuthService } from './services/auth.service';
import { AppCustomPreloader } from './config/class/app-custom-preloader';

const routes: Routes = [
  { path: '', loadChildren: './pages/home/home.module#HomeModule', data: { preload: true, depth: 1 } },
  { path: 'admin', loadChildren: './pages/admin/admin.module#AdminModule', canActivate: [AuthService] },
  { path: 'portfolio/:id', loadChildren: './pages/portfolio/portfolio.module#PortfolioModule', data: { preload: true, depth: 3 } },
  { path: 'addportfolio', loadChildren: './pages/addportfolio/addportfolio.module#AddportfolioModule', canActivate: [AuthService]},
  { path: 'editportfolio/:id', loadChildren: './pages/edit-portfolio/edit-portfolio.module#EditPortfolioModule', canActivate: [AuthService]},
  { path: 'portfolios', loadChildren: './pages/portfolios/portfolios.module#PortfoliosModule', data: { preload: true, depth: 2 } },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: AppCustomPreloader
  })],
  exports: [RouterModule],
  providers: [AuthService, AppCustomPreloader]
})
export class AppRoutingModule { }