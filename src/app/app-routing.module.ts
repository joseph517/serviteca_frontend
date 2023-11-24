import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './auth/pages/layout-page/layout-page.component';
import { Error404PageComponent } from './shared/pages/error404-page/error404-page.component';
import { AuthGuard } from './auth/guards/auth.guard';
import { PublicGuard } from './auth/guards/public.guard';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule),
    canActivate:[PublicGuard],
    canMatch:[PublicGuard]
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./users/users.module').then(m => m.UsersModule),
    canActivate:[AuthGuard],
    canMatch:[AuthGuard]
  },
  {
    path: '404',
    component: Error404PageComponent
  },
  {
    path: '',
    component: LayoutPageComponent,
    pathMatch: 'full',
    canActivate:[PublicGuard],
    canMatch:[PublicGuard]
  },
  {
    path: '**',
    redirectTo: '404'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
