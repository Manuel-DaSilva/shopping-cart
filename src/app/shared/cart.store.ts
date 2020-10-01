import { CartState } from './cart.state';
import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { Observable } from 'rxjs';
import { Product } from './product.interface';

const DEFAULT_STATE: CartState = {
    products: [],
    id: 0
};

@Injectable()
export class CartStore extends ComponentStore<CartState> {

    constructor() {
        super(DEFAULT_STATE);
    }

    get state(): CartState {
        return this.get();
    }

    readonly products$: Observable<Product[]> = this.select(state => state.products);

    readonly addProduct = this.updater((state: CartState, product: Product) => {
        return {
            ...state,
            products: [...state.products, product]
        };
    });

    readonly resetCart = this.updater((state: CartState) => {
        return DEFAULT_STATE;
    });

    readonly removeProduct = this.updater(
        (state: CartState, productToRemove: Product) => {

            const products = state.products;
            const index = products.findIndex(prod => prod.id === productToRemove.id);

            if (index < 0) {
                throw new Error('The product does not exists');
            } else {
                products.splice(index, 1);
            }

            return {
                ...state,
                products,
            };
        }
    );
}
