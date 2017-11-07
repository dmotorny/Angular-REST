import { Component }   from '@angular/core';
import { Router }      from '@angular/router';
import { HttpClient }  from '@angular/common/http';

import { MatSnackBar } from '@angular/material';

import { User }        from '../../models/user';

@Component({
  templateUrl: '../../views/auth-registration.html'
})

export class AuthRegistrationComponent {

  progressBar: Boolean;
  user:        User;

  constructor(private router: Router, private http: HttpClient, public snackBar: MatSnackBar) {
    this.progressBar = false;
    this.user        = new User;
  }

  onSubmit(form) {
    if (form.invalid) {
      return;
    }

    this.progressBar = true;

    this.http.post('registration', this.user, {responseType: 'text'}).subscribe(() => {
      this.router.navigate(['/login']);
    }, error => {
      this.progressBar = false;

      this.snackBar.open('User with this email exist', 'Close', {
        duration: 2000,
      });
    });
  }

}
