import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { PrimengModule } from '../primeng/primeng.module';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { MateialModule } from '../mateial/mateial.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    LoginPageComponent,
    RegisterPageComponent,
    LayoutPageComponent,
    MenuBarComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    PrimengModule,
    MateialModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class AuthModule { }
