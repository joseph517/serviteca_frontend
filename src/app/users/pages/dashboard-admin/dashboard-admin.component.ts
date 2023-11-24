import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.css']
})
export class DashboardAdminComponent implements OnInit {

  nameUser: string = ''
  listVehicle: boolean = false
  listClient: boolean = false
  registerMechanic: boolean = false


  ngOnInit(): void {
    this.nameUser = localStorage.getItem('name')!
  }

  constructor(
    private router: Router,
  ){}

  logout(){
    localStorage.clear()
    this.router.navigate(['/'])
  }

  showListVehicle():void{
    this.listVehicle = !this.listVehicle
    this.listClient = false
  }
  showListUser():void{
    this.listClient = !this.listClient
    this.listVehicle = false
    this.registerMechanic = false
  }
  showFormMechanic():void{
    this.registerMechanic = !this.registerMechanic
    this.listClient = false
    this.listVehicle = false

  }
}
