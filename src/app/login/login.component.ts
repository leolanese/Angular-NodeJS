import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './../services/auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  user = { email: '', password: '' };
  message = '';

  constructor(private authService: AuthService,
              private http: HttpClient) {}

  login(): void {
    this.http.get<any>('http://localhost:3000/api/message')
      .subscribe(data => this.message = data.message);
  }
}