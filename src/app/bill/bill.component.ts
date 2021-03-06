import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { CartService } from '../shared/cart.service';
import { CartState } from '../shared/cart.state';
import { CartStore } from '../shared/cart.store';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BillComponent implements OnInit {

  totalProducts = 0;
  totalBill = 0;
  cartPaid = false;

  constructor(
    private ref: ChangeDetectorRef,
    private cartService: CartService,
    private readonly cartStore: CartStore
  ) {}

  ngOnInit(): void {

    this.cartStore.state$.subscribe(state => this.updateBillSummary(state));
  }

  updateBillSummary(state: CartState): void {

    this.totalProducts = state.products.length;

    if (this.totalProducts > 0) {
      this.cartPaid = false;
    }

    this.totalBill = state.products.reduce((acc, cur) => acc + cur.price, 0);
    this.ref.detectChanges();
  }

  payment(): void {

    this.cartPaid = true;
    this.cartService.payment();
  }

  reset(): void {

    this.cartService.reset();
  }
}
