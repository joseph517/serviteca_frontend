import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { enviroments } from 'src/enviroments/enviroment';
import { User } from '../interface/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl: string = enviroments.baseUrl

  constructor(
    private http: HttpClient
  ) { }

  listClient():Observable<User[]>{
    const acces_token = localStorage.getItem('acces_token')

    const httpOption={
      headers: new HttpHeaders({
        'Content-type':'application/json',
        Authorization: `Bearer ${acces_token}`
      }),
      method: 'GET'
    }
    return this.http.get<User[]>(`${this.baseUrl}client/list/`, httpOption)
  }

}
