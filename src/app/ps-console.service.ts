import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface PlayStation {
  playstation_Name: string;
  playstation_image: string;  // Ensure this field is part of the data
  accessoriesType: string;
}

@Injectable({
  providedIn: 'root',
})
export class PsConsoleService {
  private apiUrl = 'https://localhost:7272/api/playstation_controller'; // Replace with your actual API endpoint

  constructor(private http: HttpClient) {}

  getPlayStations(): Observable<PlayStation[]> {
    return this.http.get<PlayStation[]>(this.apiUrl);
  }
}
