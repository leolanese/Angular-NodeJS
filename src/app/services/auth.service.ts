import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private LOGIN_API = 'http://localhost:3000/api/login';

  constructor(private http: HttpClient) { }

  getUser(): Observable<any> {
    return this.http.get<any>(this.LOGIN_API);
  }
}