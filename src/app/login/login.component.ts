import { Component } from '@angular/core';
import { FormControl, FormGroup, NgForm, } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  error = "";
   profileForm = new FormGroup({
    username: new FormControl(''),
     password: new FormControl(''),
   });
  constructor(private authService: AuthService, private router: Router) {

  }
  onSubmit() {
    if (this.profileForm.valid) {
      this.authService
        .login(this.profileForm.value.username, this.profileForm.value.password)
        .subscribe(
          result => {
            if (result) {
              this.router.navigateByUrl('/');
            } else {
              this.error = 'Invalid username or password!';
            }
          }
        );
    }
  }
}
