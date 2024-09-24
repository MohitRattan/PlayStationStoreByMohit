import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private apiUrl = 'https://localhost:7272/api/CartItems'; // Base URL for API
  public cartItemList: any[] = [];
  public OrderList = new BehaviorSubject<any[]>([]);

  constructor(private http: HttpClient, private authService: AuthService) {
    debugger;
    this.loadCart();
  }

  private getUserId(): string | null {
    return this.authService.getUserId(); // Get UserId from AuthService
  }

  private loadCart() {
    const userId = this.getUserId();
    if (!userId) {
      console.error('UserId is not available');
      return;
    }

    this.http.get<any[]>(this.apiUrl).subscribe({
      next: cartItems => {
        this.cartItemList = cartItems.filter(item => item.userId === userId);
        this.OrderList.next(this.cartItemList);

      },
      error: error => console.error('Error loading cart items', error)
    });
  }

  private saveCart() {
    const userId = this.getUserId();
    if (!userId) {
      console.error('UserId is not available');
      return;
    }

    this.cartItemList.forEach(item => {
      this.http.put(`${this.apiUrl}/${item.id}`, { ...item, userId }).subscribe({
        error: error => console.error('Error updating cart item', error)
      });
    });
  }

  getOrder() {
    return this.OrderList.asObservable();
  }

  SetOrder(order: any) {
    this.cartItemList.push(...order);
    this.OrderList.next(this.cartItemList);
    this.saveCart();
  }

  addtocart(order: any) {
    const userId = this.getUserId();
    if (!userId) {
      console.error('UserId is not available');
      return;
    }

    const existingOrder = this.cartItemList.find(item => item.itemId === order.id);
    
    if (existingOrder) {
      existingOrder.quantity += order.quantity;
      existingOrder.total = existingOrder.game_Price * existingOrder.quantity;

      this.http.put(`${this.apiUrl}/${order.id}`, { ...existingOrder, userId }).subscribe({
        next: () => console.log('Cart item updated successfully'),
        error: error => console.error('Error updating cart item', error)
      });
    } else {
      const newOrder = {
        game_Price: order.game_Price,
        quantity: order.quantity,
        total: order.game_Price * order.quantity,
        userId,
        itemId: order.id,
        game_Name: order.game_Name,
        game_Url: order.game_Url
      };

      this.cartItemList.push(newOrder);
      this.http.post(this.apiUrl, newOrder).subscribe({
        next: () => console.log('Cart item added successfully'),
        error: error => console.error('Error adding cart item', error)
      });
    }

    this.OrderList.next(this.cartItemList);
  }

  getTotalPrice(): number {
    return this.cartItemList.reduce((total, item) => total + (item.total || 1), 0);
  }

  removecartItem(order: any) {
    this.cartItemList = this.cartItemList.filter(item => item.itemId !== order.itemId);
    this.OrderList.next(this.cartItemList);
    this.http.delete(`${this.apiUrl}/${order.id}`).subscribe({
      error: error => console.error('Error removing cart item', error)
    });
  }

  removeAllcat() {
    const userId = this.getUserId();
    if (!userId) {
      console.error('UserId is not available');
      return;
    }

    this.cartItemList.forEach(item => {
      this.http.delete(`${this.apiUrl}/${item.itemId}`).subscribe({
        error: error => console.error('Error removing cart item', error)
      });
    });
    this.cartItemList = [];
    this.OrderList.next(this.cartItemList);
  }

  editcartItem(id: any, quantity: number): void {
    const item = this.cartItemList.find(cartItem => cartItem.itemId === id);
    if (item) {
      item.quantity = quantity;
      item.total = item.game_Price * item.quantity;

      this.http.put(`${this.apiUrl}/${item.itemId}`, item).subscribe({
        error: error => console.error('Error updating cart item', error)
      });
      this.OrderList.next(this.cartItemList);
    }
  }
}
