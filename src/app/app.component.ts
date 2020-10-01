import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from './shared/cart.service';
import { Product } from './shared/product.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit{

  products$: Observable<Product[]>;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.products$ = this.cartService.store.products$;
  }

  removeProduct(prod: Product): void {
    this.cartService.store.removeProduct(prod);
  }
}
