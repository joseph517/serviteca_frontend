import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ListVehicleComponent } from './components/list-vehicle/list-vehicle.component';

import { PrimengModule } from '../primeng/primeng.module';


@NgModule({
  declarations: [
    DashboardComponent,
    ListVehicleComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    PrimengModule

  ]
})
export class UsersModule { }
