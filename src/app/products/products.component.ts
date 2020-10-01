import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { PRODUCTS } from './products';
import { Product } from '../shared/product.interface';
import { CartStore } from '../shared/cart.store';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsComponent implements OnInit {

  products = PRODUCTS;

  constructor(private readonly cartStore: CartStore) { }

  ngOnInit(): void {
  }

  addProduct(prod: Product): void {
    this.cartStore.addProduct(prod);
  }
}
