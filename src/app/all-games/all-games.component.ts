import { Component, OnInit } from '@angular/core';
import { AllgamesService } from '../allgames.service';
import { CartService } from '../cart.service'; // Import the CartService
import { PageEvent, MatPaginatorModule } from '@angular/material/paginator';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

interface Game {
  id: number;
  name: string;
  game_Url: string;
  game_Name: string;
  game_Price: number;  
  quantity: number; 
  
}

@Component({
  selector: 'app-all-games',
  standalone: true,
  imports: [CommonModule, MatPaginatorModule, MatCardModule],
  templateUrl: './all-games.component.html',
  styleUrls: ['./all-games.component.css']
})
export class AllGamesComponent implements OnInit {
    allgames: Game[] = [];
    displayedGames: Game[] = [];
    pageSize: number = 12;
    currentPage: number = 0;
    totalGames: number = 0;
    cart: Game[] = [];
    grandTotal: number = 0;  // Add this property
  
    constructor(private allgamesService: AllgamesService, private cartService: CartService) {}
  
    ngOnInit(): void {
      this.loadAllGames();
      this.loadCart(); 
    }
  
    loadAllGames(): void {
      this.allgamesService.getallGames().subscribe(
        (data: Game[]) => {
          this.allgames = data;
          this.totalGames = this.allgames.length;
          this.updateDisplayedGames();
        },
        (error) => {
          console.error('Error fetching all games', error);
        }
      );
    }
  
    updateDisplayedGames(): void {
      const start = this.currentPage * this.pageSize;
      const end = start + this.pageSize;
      this.displayedGames = this.allgames.slice(start, end);
    }
  
    onPageChange(event: PageEvent): void {
      this.pageSize = event.pageSize;
      this.currentPage = event.pageIndex;
      this.updateDisplayedGames();
    }
  
    addToLibrary(game: Game): void {
      const gameToAdd = { ...game, quantity: 1 }; 
      this.cartService.addtocart(gameToAdd); 
      console.log(`${game.name} added to the library`);
    }
  
    // Load the cart from the CartService
    loadCart(): void {
      this.cartService.getOrder().subscribe((cart: Game[]) => {
        this.cart = cart;
        // this.calculateGrandTotal();  
      });
    }
  
    
calculateGrandTotal(): void {
  this.grandTotal = this.cart.reduce((total, game) => {
    console.log(`Game: ${game.game_Name}, Price: ${game.game_Price}, Quantity: ${game.quantity}`); 
    return total + (game.game_Price * game.quantity);
  }, 0);
  console.log('Grand total:', this.grandTotal); 
}
  }
  