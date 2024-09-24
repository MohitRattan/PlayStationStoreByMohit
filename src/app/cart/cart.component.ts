import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { AddressFormComponent } from "../address-form/address-form.component";
import { CommonModule } from '@angular/common';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Router } from '@angular/router';
import { PaynowService } from '../paynow.service';
import { PaynowComponent } from "../paynow/paynow.component";

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, AddressFormComponent, PaynowComponent],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  animations: [
    trigger('cardAnimation', [
      state('center', style({
        transform: 'translateX(0)'
      })),
      state('move-left', style({
        transform: 'translateX(-100%)'
      })),
      transition('center <=> move-left', [
        animate('0.5s ease-in-out')
      ]),
    ])
  ]
})
export class CartComponent implements OnInit {
  
  games: any[] = [];
  public grandTotal: number = 0;
  showAddressForm: boolean = false;

  constructor(private cartService: CartService, private router: Router, private paynow: PaynowService) {}

  ngOnInit(): void {
    this.loadGames();
    this.paynow.setGrandTotal(this.grandTotal);

  }

  private loadGames(): void {
    this.cartService.getOrder().subscribe({
      next: (res) => {
        this.games = res;
        this.updateTotal();  // Update total when cart items are fetched
      },
      error: (err) => {
        console.error('Failed to load cart items', err);
      }
    });
  }

  editGame(game: any): void {
    const newQuantity = prompt('Enter new quantity:', game.quantity.toString());
    if (newQuantity !== null) {
      const quantity = parseInt(newQuantity, 10);
      if (quantity > 0) {
        this.cartService.editcartItem(game.id, quantity);
        this.updateTotal();
      } else {
        alert('Quantity should be a positive number.');
      }
    }
  }

  removeGame(id: any): void {
    this.cartService.removecartItem(id);
    this.updateTotal();
  }

  private updateTotal(): void {
    const totalPrice = this.cartService.getTotalPrice();
    console.log('Total Price from Service:', totalPrice); // Debugging
    this.grandTotal = typeof totalPrice === 'number' ? totalPrice : parseInt(totalPrice);
  }

  payNow(): void {
    if (this.grandTotal > 0) {
      alert(`Proceeding to payment for the amount of ₹${this.grandTotal}`);
      this.showAddressForm = true;
      this.router.navigate(['/paynow']);
      // this.cartService.removeAllcat();
    } else {
      alert('Cart is empty. Add items to the cart before proceeding.');
    }
  }
}
