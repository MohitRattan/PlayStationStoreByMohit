import { Injectable } from '@angular/core';
import { CartService } from './cart.service';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() {}

  // Check if the user is logged in
  isLoggedIn(): boolean {
    return !!localStorage.getItem('signupUser'); // Simulating login state
  }

  // Get username
  getUsername(): string {
    const checkUser = localStorage.getItem('signupUser');
    if (checkUser) {
      return JSON.parse(checkUser).user_name;
    }
    return 'User';
  }

  // Get profile picture URL
  getProfilePictureUrl(): string {
    const checkUser = localStorage.getItem('signupUser');
    if (checkUser) {
      return JSON.parse(checkUser).profile_Image;
    }
    return 'User';
  }
  
  // Get User ID
  getUserId(): string {
    const checkUser = localStorage.getItem('signupUser');
    if (checkUser) {
      return JSON.parse(checkUser).user_name; // Ensure this matches your actual data structure
    }
    return 'unknown'; // Default value if user ID is not available
  }

  // Clear cart items
  clearCartItems(): void {
    localStorage.removeItem('cartItems'); // Or clear any other cart-related data
    
  }

  // Log user out
  logout(): void {
    localStorage.removeItem('signupUser');
    localStorage.removeItem('profilePictureUrl');
    this.clearCartItems();
    window.location.reload(); // Refresh the window after logout
  }

  // Simulate user login and refresh the window
  login(userData: any): void {
    localStorage.setItem('signupUser', JSON.stringify(userData));
    window.location.reload(); // Refresh the window after login
  }
}
