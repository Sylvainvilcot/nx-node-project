import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { User } from '../../../interfaces/User';
import { LoginService } from '../../../services/login.service';

@Component({
  selector: 'node-project-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  user: User;

  error!: string;

  constructor(private loginService: LoginService, private router: Router, private snackBar: MatSnackBar) {
    this.user = new User();
  }
  hide = true;

  ngOnInit(): void {
  }

  onSubmit() {
    this.loginService.login(this.user.login, this.user.password).subscribe((res: any) => {
      if(!res.error) {
        this.router.navigate(['/']);
        this.snackBar.open('Connected', 'Close', {duration: 700});
      } else {
        this.error = res.error;
      }
    });
  }

}
