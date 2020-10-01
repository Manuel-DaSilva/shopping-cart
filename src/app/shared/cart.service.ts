import { Injectable } from '@angular/core';
import { CartStore } from './cart.store';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private readonly cartStore: CartStore) { }

  payment(): void {

    console.log('Paying:');
    console.log(this.cartStore.state);
    this.cartStore.resetCart();
  }

  reset(): void {

    this.cartStore.resetCart();
  }
}
