import { Component }   from '@angular/core';
import { Router }      from '@angular/router';
import { HttpClient }  from '@angular/common/http';

import { MatSnackBar } from '@angular/material';

import { User }        from '../../models/user';
import { Session }     from '../../models/session';

@Component({
  templateUrl: '../../views/auth-login.html'
})

export class AuthLoginComponent {

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

    this.http.post('login', this.user).subscribe((data: Session) => {
      window.localStorage.setItem('token', data.token);

      this.router.navigate(['/items']);
    }, error => {
      this.progressBar = false;

      this.snackBar.open('User not found', 'Close', {
        duration: 2000,
      });
    });
  }

}
