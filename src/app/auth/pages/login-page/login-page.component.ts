import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  public value!: string;

  login():void{
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const password = (document.getElementById('password') as HTMLInputElement).value;

    const data = {
      email: email,
      password: password
    };

    console.log(data)

  }
}
