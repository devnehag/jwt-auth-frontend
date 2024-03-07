import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(private http: HttpClient, private router: Router,private authService: AuthService) {}

  login(): void {
    console.log('Logging in...');
    this.authService.login(this.username, this.password).subscribe(
      (response: any) => {
        localStorage.setItem('token', response.token);
        this.router.navigate(['/user-details']);
      },
      (error) => {
        console.error('Login failed:', error);
        // Handle login failure (show error message, etc.)
      }
    );
  }
}