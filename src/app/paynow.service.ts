import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class PaynowService {
  private grandTotalSubject = new BehaviorSubject<number>(0);
  grandTotal$ = this.grandTotalSubject.asObservable();

  setGrandTotal(total: number): void {
    this.grandTotalSubject.next(total);
  }
  private payApiUrl = 'https://localhost:7272/api/AllGames'; // Replace with your API endpoint

  constructor(private http: HttpClient) {}

  // Process the payment for the total amount
  processPayment(totalAmount: number): Observable<any> {
    const paymentDetails = { amount: totalAmount };
    return this.http.post<any>(this.payApiUrl, paymentDetails);
  }
}
