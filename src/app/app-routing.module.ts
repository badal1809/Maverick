import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { Error404PageComponent } from './pages/error404-page/error404-page.component';
import { CardOverviewComponent } from './pages/card-overview/card-overview.component';
import { AuthService } from './core/services/auth.service';
import { LoginPageComponent } from './pages/login-page/login-page.component';
const routes: Routes = [
  { path: '', component: LoginPageComponent },
  { path: 'home', component: HomePageComponent, canActivate: [AuthService] },
  { path: 'error', component: Error404PageComponent },
  { path: 'overview', component: CardOverviewComponent, canActivate: [AuthService] },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
