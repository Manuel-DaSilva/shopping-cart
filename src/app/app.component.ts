import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartStore } from './shared/cart.store';
import { Product } from './shared/product.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit{

  products$: Observable<Product[]>;

  constructor(private readonly cartStore: CartStore) {}

  ngOnInit(): void {
    this.products$ = this.cartStore.products$;
  }

  removeProduct(prod: Product): void {
    this.cartStore.removeProduct(prod);
  }
}
