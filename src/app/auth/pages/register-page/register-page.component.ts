import { Component } from '@angular/core';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent {

  userName = '';
  name = '';
  lastName = '';
  email = '';
  phoneNumber = '';
  password = '';

  phoneExists = false;
  userNameExists = false;
  emailExists = false;

  constructor() { }

  registerUser() {
    const userData = {
      user_name: this.userName,
      name: this.name,
      last_name: this.lastName,
      email: this.email,
      number_phone: this.phoneNumber,
      password: this.password
    };

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

  clearFields() {
    this.userName = '';
    this.name = '';
    this.lastName = '';
    this.email = '';
    this.phoneNumber = '';
    this.password = '';

    this.phoneExists = false;
    this.userNameExists = false;
    this.emailExists = false;
  }

  clearError(fieldName: string) {
    if (fieldName === 'userName') {
      this.userNameExists = false;
    } else if (fieldName === 'email') {
      this.emailExists = false;
    } else if (fieldName === 'phoneNumber') {
      this.phoneExists = false;
    }
  }

  validatePhoneNumber(event: KeyboardEvent) {
    const allowedKeys = ['+', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ' '];

    const keyPressed = event.key;

    if (!allowedKeys.includes(keyPressed) && keyPressed !== 'Backspace') {
      event.preventDefault();
    }
  }

}
