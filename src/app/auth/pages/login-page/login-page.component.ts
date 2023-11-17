import { Component } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

  constructor(
    private authService: AuthService
  ) { }

  public formLogin = new FormGroup({
    email: new FormControl<string>('', Validators.required),
    password: new FormControl<string>('', Validators.required)
  })

  login(): void {

    if (!this.formLogin.valid) return alert('formulario no valido')

    this.authService.login(this.formLogin.value as Form)
      .subscribe(
        response => {
          console.log(response)
          localStorage.setItem("acces_token", response.access)
        },
        err => {
          alert('Erro de autenticacion')
        }
      )

  }
}
