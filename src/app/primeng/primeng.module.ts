import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimengRoutingModule } from './primeng-routing.module';

import { MenubarModule } from 'primeng/menubar';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PrimengRoutingModule
  ],
  exports: [
    MenubarModule,
    PasswordModule,
    InputTextModule,
    ButtonModule,
    TableModule,
  ]
})
export class PrimengModule { }
