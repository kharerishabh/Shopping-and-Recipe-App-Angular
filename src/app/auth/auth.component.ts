import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthResponseData, AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
})
export class AuthComponent {
  isLoginMode = true;
  isLoading = false;
  error = null;
  

  constructor(private authService: AuthService) {}

  onSwitch() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm) {
    let authObser: Observable<AuthResponseData>
    if (!form.valid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.password;

    this.isLoading = true
    if (this.isLoginMode) {
      authObser = this.authService.login(email, password)
    } else {
      authObser = this.authService.signUp(email, password)
      //.subscribe(
      //   respData => {
      //     console.log(respData);
      //     this.isLoading = false
      //   },
      //   errorMessage => {
      //     console.log(errorMessage);
      //     this.error = errorMessage
      //     this.isLoading = false
      //   }
      // );
    }
    authObser.subscribe(
      respData => {
        console.log(respData);
        this.isLoading = false
      },
      errorMessage => {
        console.log(errorMessage);
        this.error = errorMessage
        this.isLoading = false
      }
    );
    form.reset();
  }
}
