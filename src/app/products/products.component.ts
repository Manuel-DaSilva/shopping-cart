import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { PRODUCTS } from './products';
import { Product } from '../shared/product.interface';
import { CartService } from '../shared/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsComponent implements OnInit {

  products = PRODUCTS;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  addProduct(prod: Product): void {
    this.cartService.store.addProduct(prod);
  }
}
