import { Component } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';



@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
  providers: [MessageService]
})
export class LoginPageComponent {

  constructor(
    private authService: AuthService,
    private router: Router,
    private messageService: MessageService
  ) { }

  show(message:string) {
    this.messageService.add({ severity: 'error', summary: 'invalido', detail: message });
  }

  public formLogin = new FormGroup({
    email: new FormControl<string>('', Validators.required),
    password: new FormControl<string>('', Validators.required)
  })

  login(): void {

    if (!this.formLogin.valid) {
      this.formLogin.markAsDirty()
      this.formLogin.markAllAsTouched()
      this.show('Campos requerido')

       return
    }

    this.authService.login(this.formLogin.value as Form)
      .subscribe(
        response => {
          console.log(response)
          localStorage.setItem("acces_token", response.access),
          localStorage.setItem("user_id", response.user_id.toString()),
          localStorage.setItem("name", response.name)

          this.router.navigate(['/dashboard'])
        },
        err => {
          this.show('Error de autenticacion')

        }
      )

  }
}
