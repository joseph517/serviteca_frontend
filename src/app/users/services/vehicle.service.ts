import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Vehicle } from '../interface/user.interface';
import { Observable, Subject } from 'rxjs';
import { enviroments } from '../../../enviroments/enviroment';
import { Form } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  private baseUrl: string = enviroments.baseUrl
  private vehicleEventSubject = new Subject<void>();

  constructor(
    private http: HttpClient
  ) { }

  vehicleEvent$ = this.vehicleEventSubject.asObservable();

  triggerVehicleEvent(): void {
    this.vehicleEventSubject.next();
  }

  listVehicle():Observable<Vehicle[]>{
    const user_id = localStorage.getItem('user_id')
    const acces_token = localStorage.getItem('acces_token')
    const httpOption={
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        Authorization:  `Bearer ${acces_token}`
      }),
      method: 'POST',
    }
    return this.http.get<Vehicle[]>(`${this.baseUrl}vehicle/user_list/?user_id=${user_id}`, httpOption)
  }

  registerVehicle(vehicle: Form):Observable<Vehicle>{
    const acces_token = localStorage.getItem('acces_token')

    const httpOption = {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        Authorization: `Bearer ${acces_token}`
      }),
      method: 'POST'
    }
    return this.http.post<Vehicle>(`${this.baseUrl}vehicle/create/`, vehicle, httpOption)
  }

  deleteVehicle(id_vehicle:number):Observable<void>{
    const acces_token = localStorage.getItem('acces_token')
    const httOption = {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        Authorization: `Bearer ${acces_token}`
      }),
      method: 'DELETE'
    }
    return this.http.delete<void>(`${this.baseUrl}vehicle/delete/${id_vehicle}/`, httOption)
  }
}
