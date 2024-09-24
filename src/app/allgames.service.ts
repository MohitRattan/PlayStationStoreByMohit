import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AllgamesService {
  private apiUrl = 'https://localhost:7272/api/AllGames'; // Replace with your API URL

  constructor(private http: HttpClient) { }

  getallGames(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
