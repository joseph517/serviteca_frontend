import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'auth-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {

  items: MenuItem[] | undefined

  ngOnInit(): void {
    this.items = [
      {
        label: 'Iniciar Sesion',
        icon: 'pi pi-fw pi-users',
        routerLink: 'auth/login'
      },
      {
        label: 'Registrar',
        icon: 'pi pi-fw pi-user-plus',
        routerLink: 'auth/register'
      }
    ]
  }

}
