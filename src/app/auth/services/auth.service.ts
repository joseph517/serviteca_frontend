import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Form } from '@angular/forms';
import { enviroments } from 'src/enviroments/enviroment';
import { Observable, catchError, of } from 'rxjs';
import { Login } from '../interface/auth.interface';
import { Register } from 'src/app/shared/interfaces/shared.interface';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }
  private baseUrl: string = enviroments.baseUrl

  checkAuthentication(): Observable<boolean>{
    if(!localStorage.getItem('acces_token')) return of(false)
    return of(true)
  }

  login(form: Form): Observable<Login>{
    return this.http.post<Login>(`${this.baseUrl}token/`, form);

  }

  register(form: Form):Observable<Register>{

    return this.http.post<Register>(`${this.baseUrl}client/create/`, form)
  }

}
