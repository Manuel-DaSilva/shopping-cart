import { Product } from './product.interface';

export interface CartState {
    id: number;
    products: Product[];
}
