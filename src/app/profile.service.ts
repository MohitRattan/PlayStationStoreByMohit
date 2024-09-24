import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AuthService } from './auth.service';

export interface PointsData {
  id: number;
  userId: string;
  points: number;
  dateRecorded: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private apiUrl = 'https://localhost:7272/api/Scores';

  constructor(private http: HttpClient, private authService: AuthService) {}

  getPointsData(): Observable<PointsData[]> {
    const userId = this.authService.getUsername();

    // Check if userId is available
    if (!userId) {
      return of([]); // Return an empty array if userId is not available
    }

    const url = `${this.apiUrl}?userId=${userId}`;
    return this.http.get<PointsData[]>(url);
  }
}
