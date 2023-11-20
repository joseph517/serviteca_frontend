import { Component } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { VehicleService } from '../../services/vehicle.service';

@Component({
  selector: 'user-register-vehicle',
  templateUrl: './register-vehicle.component.html',
  styleUrls: ['./register-vehicle.component.css']
})
export class RegisterVehicleComponent {

  constructor(
    private vehicleService: VehicleService

  ){}

  registerVehicleForm = new FormGroup({
    client: new FormControl<string>(localStorage.getItem('user_id') || '', Validators.required),
    brand: new FormControl<string>('', Validators.required),
    model: new FormControl<string>('', Validators.required),
    year: new FormControl<string>('', Validators.required),
    plate_number: new FormControl<string>('', Validators.required)
  })

  showForm:boolean = false

  isShowForm(){
    this.showForm = !this.showForm
  }

  registerVehicle(){

    if(!this.registerVehicleForm.valid) return console.error('eerr')

    this.vehicleService.registerVehicle(this.registerVehicleForm.value as Form)
      .subscribe(
        res => {
          this.vehicleService.triggerVehicleEvent()
          this.registerVehicleForm.reset()
          this.isShowForm()
        },
        err => {
          console.log(err)
        }
      )
  }

}
