import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';


@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent {

  public form = new FormGroup({
    username: new FormControl<string>('', Validators.required),
    firstName: new FormControl<string>('', Validators.required),
    lastName: new FormControl<string>('', Validators.required),
    email: new FormControl<string>('', [Validators.required, Validators.email]),
    phone: new FormControl<string>('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  phoneExists = false;
  userNameExists = false;
  emailExists = false;

  constructor(private fb: FormBuilder) { }

  resetForm(){
    this.form.reset()
  }



    // this.http.post('http://localhost:8000/api/client/create/', userData)
    //   .subscribe(
    //     response => {
    //       // alert('Usuario creado exitosamente');
    //       this.clearFields();
    //     },
    //     (error: HttpErrorResponse) => {
    //       console.log('Código de error:', error.status, ', mensaje:', error.error);
    //       if (error.status === 400) {
    //         this.phoneExists = error.error.number_phone ? true : false;
    //         this.userNameExists = error.error.user_name ? true : false;
    //         this.emailExists = error.error.email ? true : false;
    //       } else {
    //         alert('Error interno del servidor. Por favor, intenta nuevamente más tarde.');
    //       }
    //     }
    //   );


  }





  // validatePhoneNumber(event: KeyboardEvent) {
  //   const allowedKeys = ['+', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ' '];

  //   const keyPressed = event.key;

  //   if (!allowedKeys.includes(keyPressed) && keyPressed !== 'Backspace') {
  //     event.preventDefault();
  //   }
  // }

// }
