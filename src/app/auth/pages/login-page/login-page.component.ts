import { Component } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

  constructor(
    private authService: AuthService,
    private router: Router
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
          localStorage.setItem("acces_token", response.access),
          localStorage.setItem("user_id", response.user_id.toString()),

          this.router.navigate(['/dashboard'])
        },
        err => {
          alert('Error de autenticacion')
        }
      )

  }
}
