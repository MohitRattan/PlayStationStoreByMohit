import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private apiUrl = 'https://localhost:7272/api/Top10Games'; // Replace with your API URL

  constructor(private http: HttpClient) { }

  getGames(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
