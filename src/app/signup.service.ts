import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  private apiUrl = 'https://localhost:7272/api/signups';

  constructor(private http: HttpClient) { }

  postItem(formData: FormData): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, formData);
  }

  loginUser(user_email: string, user_password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, { user_email, user_password });
  }
}
