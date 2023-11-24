import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormControl, Form } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { MessageService } from 'primeng/api';
import { from } from 'rxjs';




@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css'],
  providers: [MessageService]

})
export class RegisterPageComponent {

  public form = new FormGroup({
    user_name: new FormControl<string>('', Validators.required),
    name: new FormControl<string>('', Validators.required),
    last_name: new FormControl<string>('', Validators.required),
    email: new FormControl<string>('',  [Validators.email, Validators.required]),
    number_phone: new FormControl('+57', [Validators.required]),
    password: new FormControl('', Validators.required)
  });

  constructor(
    private auth : AuthService,
    private router: Router,
    private messageService: MessageService
  ) { }

  show(message:string) {
    this.messageService.add({ severity: 'error', summary: 'invalido', detail: message });
  }

  resetForm(){
    this.form.reset()
  }


  register(){
    if(!this.form.valid) {
      this.form.markAsDirty()
      this.form.markAllAsTouched()
      this.show('datos incorrectos')
      return
    }

    this.auth.register(this.form.value as Form)
      .subscribe(
        res => {
          this.router.navigate(["/"])
        },
        err => {
          console.log(this.form.value)
          console.log(err)
        }
      )

  }
}

