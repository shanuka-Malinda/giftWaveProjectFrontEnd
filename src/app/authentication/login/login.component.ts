import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';
  user={
    userName:"",
    userPassword:""
  }
  constructor(private authService: AuthService, private router: Router) {}

  login(): void {
    console.log(this.user);
    this.authService.login(this.user).subscribe({
      next: (data) => {
        this.authService.setToken(data.jwtToken); // Store the token
        localStorage.setItem('id', data.user.id);
        localStorage.setItem('username', data.user.userName);
        localStorage.setItem('imgUrl', data.user.image);
        localStorage.setItem('email', data.user.email);
        localStorage.setItem('role', data.user.role.roleName);
        console.log('User:', data.user); // You can access the user details here
        if(localStorage.getItem('role')=='Admin'){
          this.router.navigate(['/admin/dash']);  // Navigate to a secure page
        }
        this.router.navigate(['/home']);  // Navigate to a secure page
      },
      error: (err) => {
        this.errorMessage = 'Invalid credentials!';
      }
    });
  }
}
