import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AuthService } from './services/auth.service';
import { AppCustomPreloader } from './config/class/app-custom-preloader';

const routes: Routes = [
  { path: '', loadChildren: './pages/home/home.module#HomeModule' },
  { path: 'admin', loadChildren: './pages/admin/admin.module#AdminModule', canActivate: [AuthService] },
  { path: 'portfolio/:id', loadChildren: './pages/portfolio/portfolio.module#PortfolioModule' },
  { path: 'addportfolio', loadChildren: './pages/addportfolio/addportfolio.module#AddportfolioModule', canActivate: [AuthService]},
  { path: 'portfolios', loadChildren: './pages/portfolios/portfolios.module#PortfoliosModule', data: { preload: true } },
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