import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Form } from '@angular/forms';
import { enviroments } from 'src/enviroments/enviroment';
import { Observable, catchError, of } from 'rxjs';
import { Login, Register } from '../interface/auth.interface';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }
  private baseUrl: string = enviroments.baseUrl

  login(form: Form): Observable<Login>{
    console.log(form)
    console.log(`${this.baseUrl}token/`)

    return this.http.post<Login>(`${this.baseUrl}token/`, form);

  }

  register(form: Form):Observable<Register>{

    return this.http.post<Register>(`${this.baseUrl}client/create/`, form)
  }

}
