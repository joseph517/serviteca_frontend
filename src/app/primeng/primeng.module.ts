import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimengRoutingModule } from './primeng-routing.module';

import { MenubarModule } from 'primeng/menubar';
import { PasswordModule } from 'primeng/password';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PrimengRoutingModule
  ],
  exports: [
    MenubarModule,
    PasswordModule
  ]
})
export class PrimengModule { }
