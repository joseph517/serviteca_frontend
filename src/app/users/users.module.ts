import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { UsersRoutingModule } from './users-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ListVehicleComponent } from './components/list-vehicle/list-vehicle.component';

import { PrimengModule } from '../primeng/primeng.module';
import { RegisterVehicleComponent } from './components/register-vehicle/register-vehicle.component';
import { DashboardAdminComponent } from './pages/dashboard-admin/dashboard-admin.component';
import { ListUserComponent } from './components/list-user/list-user.component';
import { AuthModule } from '../auth/auth.module';


@NgModule({
  declarations: [
    DashboardComponent,
    ListVehicleComponent,
    RegisterVehicleComponent,
    DashboardAdminComponent,
    ListUserComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    PrimengModule,
    FormsModule,
    ReactiveFormsModule,
    AuthModule
  ]
})
export class UsersModule { }
