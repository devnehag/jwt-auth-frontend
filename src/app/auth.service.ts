// src/app/auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/sessions';
  constructor(private http: HttpClient) {}
  login(username: string, password: string): Observable<any> {
    return this.http.post(this.apiUrl, { username, password });
  }
  getToken(): string | null {
    return localStorage.getItem('token');
  }
  logout(): void {
    localStorage.removeItem('token');
  }
}
