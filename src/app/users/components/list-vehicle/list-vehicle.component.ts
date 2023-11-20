import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../../services/vehicle.service';
import { Vehicle } from '../../interface/users';

@Component({
  selector: 'users-list-vehicle',
  templateUrl: './list-vehicle.component.html',
  styleUrls: ['./list-vehicle.component.css']
})
export class ListVehicleComponent implements OnInit {

  listVehicles:Vehicle[] = []

  ngOnInit(): void {
    this.vehicleService.vehicleEvent$
      .subscribe(()=> this.fetchUserVehicles())
    this.fetchUserVehicles()
  }

  constructor(
    private vehicleService: VehicleService
  ){}

  fetchUserVehicles(){
    this.vehicleService.listVehicle()
      .subscribe(
        res => {
          this.listVehicles = res
        },
        err => {
          console.log(err)
        }
      )
  }

  deleteVehicle(idVehicle: number){

    this.vehicleService.deleteVehicle(idVehicle)
      .subscribe(
        res => {
          this.loadVehicles()
        },
        err => {
          console.log(err)
        }
      )
  }

  loadVehicles():void{
    this.vehicleService.listVehicle()
      .subscribe(
        res => {
          this.listVehicles = res
        },
        err => {
          console.error('Error al cargar la lista de vehículos:', err);
        }
      )
  }
}
