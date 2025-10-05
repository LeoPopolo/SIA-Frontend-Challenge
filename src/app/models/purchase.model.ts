import { CartItem } from './cart.model';

export interface PurchaseRequest {
  products: CartItem[];
}
