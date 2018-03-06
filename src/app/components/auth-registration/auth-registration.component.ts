import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { MatSnackBar } from '@angular/material';

import { User } from '../../models/user';

import { UsersService } from '../../services/users.service';

@Component({
  templateUrl: '../../views/auth-registration.html',
  providers: [UsersService]
})

export class AuthRegistrationComponent {

  progressBar: boolean = false;
  user: User = new User;

  constructor(
    private router: Router,
    public snackBar: MatSnackBar,
    private usersService: UsersService,
  ) { }

  onSubmit(form) {
    if (form.invalid) {
      return;
    }

    this.progressBar = true;

    this.usersService.create(this.user).subscribe(() => this.router.navigate(['/login']), error => {
      this.progressBar = false;

      this.snackBar.open('User with this email exist', 'Close', {
        duration: 2000,
      });
    });
  }

}
