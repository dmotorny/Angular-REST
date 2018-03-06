import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { MatSnackBar } from '@angular/material';

import { User } from '../../models/user';
import { Session } from '../../models/session';

import { UsersService } from '../../services/users.service';

@Component({
  templateUrl: '../../views/auth-login.html',
  providers: [UsersService]
})

export class AuthLoginComponent {

  progressBar: boolean = false;
  user: User = new User;

  constructor(
    private router: Router,
    public snackBar: MatSnackBar,
    private usersService: UsersService
  ) { }

  onSubmit(form) {
    if (form.invalid) {
      return;
    }

    this.progressBar = true;

    this.usersService.login(this.user).subscribe(() => this.router.navigate(['/items']), error => {
      this.progressBar = false;

      this.snackBar.open('User not found', 'Close', {
        duration: 2000,
      });
    });
  }

}
