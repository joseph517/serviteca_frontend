import { Component } from '@angular/core';
import { FormGroup, Validators, FormControl, Form } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent {

  public form = new FormGroup({
    user_name: new FormControl<string>('', Validators.required),
    name: new FormControl<string>('', Validators.required),
    last_name: new FormControl<string>('', Validators.required),
    email: new FormControl<string>('',  Validators.email),
    number_phone: new FormControl('+57', [Validators.required, this.validatePhoneNumber.bind(this)]),
    password: new FormControl('', Validators.required)
  });

  constructor(
    private auth : AuthService,
    private router: Router
  ) { }

  resetForm(){
    this.form.reset()
  }

  validatePhoneNumber(control: FormControl): { [key: string]: boolean } | null {
    const phoneNumber = control.value;
    const allowedChars = ['+', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ' '];

    for (const char of phoneNumber) {
      if (!allowedChars.includes(char)) {
        return { 'invalidPhoneNumber': true };
      }
    }

    return null; // La validación pasa
  }

  register(){
    if(!this.form.valid) return alert('datos incorrectos')

    this.auth.register(this.form.value as Form)
      .subscribe(
        res => {
          console.log(res)
          this.router.navigate(["/"])
        },
        err => {
          console.log(err)
        }
      )

  }
}

