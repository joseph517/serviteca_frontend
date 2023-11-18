import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Vehicle } from '../interface/users';
import { Observable } from 'rxjs';
import { enviroments } from '../../../enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  private baseUrl: string = enviroments.baseUrl

  constructor(
    private http: HttpClient
  ) { }

  listVehicle():Observable<Vehicle[]>{
    const acces_token = localStorage.getItem('acces_token')
    const user_id = localStorage.getItem('user_id')

    const httpOption={
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        Authorization:  `Bearer ${acces_token}`
      }),
      method: 'POST',
    }

    return this.http.get<Vehicle[]>(`${this.baseUrl}vehicle/user_list/?user_id=${user_id}`, httpOption)
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
