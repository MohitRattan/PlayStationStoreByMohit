import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccessoriesService {
  private apiUrl = 'https://localhost:7272/api/PS_Accessories_5'; // Replace with your API URL

  constructor(private http: HttpClient) { }

  getProducts(): Observable<accessories[]> {
    return this.http.get<accessories[]>(this.apiUrl);
  }

  getProductsByName(Name: string): Observable<accessories[]> {
    debugger;
    const params = new HttpParams().set('Name', Name);
    return this.http.get<accessories[]>(this.apiUrl +"/"+ Name );
  }
}

export interface accessories {
  id: number;
  name: string;
  controller: string;
}
