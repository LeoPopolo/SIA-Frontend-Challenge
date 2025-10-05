import { Injectable } from '@angular/core';
import { Product } from '@models/product.model';
import { CartItem } from '@models/cart.model';
import { BehaviorSubject, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private readonly CART_KEY = 'shopping_cart';
  private cartSubject$ = new BehaviorSubject<CartItem[]>(this.loadCartFromStorage());

  cart$ = this.cartSubject$.asObservable();
  cartTotal$ = this.cart$.pipe(map(cart => cart.reduce((total, item) => total + (item.product.price * item.quantity), 0)));

  constructor() {
    this.cart$.subscribe(cart => this.saveCartToStorage(cart));
  }

  private loadCartFromStorage(): CartItem[] {
    try {
      const cartData = localStorage.getItem(this.CART_KEY);
      return cartData ? JSON.parse(cartData) : [];
    } catch (error) {
      console.error('Error loading cart from localStorage:', error);
      return [];
    }
  }

  private saveCartToStorage(cart: CartItem[]): void {
    try {
      localStorage.setItem(this.CART_KEY, JSON.stringify(cart));
    } catch (error) {
      console.error('Error saving cart to localStorage:', error);
    }
  }

  getCart() {
    return this.cartSubject$.getValue();
  }

  setItemToCart(item: Product) {
    const currentCart = this.cartSubject$.getValue();
    const existingItemIndex = currentCart.findIndex(cartItem => cartItem.product.id === item.id);

    if (existingItemIndex !== -1) {
      const updatedCart = [...currentCart];
      updatedCart[existingItemIndex] = {
        ...updatedCart[existingItemIndex],
        quantity: updatedCart[existingItemIndex].quantity + 1
      };
      this.cartSubject$.next(updatedCart);
    } else {
      const newCartItem: CartItem = {
        product: item,
        quantity: 1
      };
      this.cartSubject$.next([...currentCart, newCartItem]);
    }
  }

  removeItemFromCart(productId: number) {
    const currentCart = this.cartSubject$.getValue();
    const updatedCart = currentCart.filter(cartItem => cartItem.product.id !== productId);
    this.cartSubject$.next(updatedCart);
  }

  updateItemQuantity(productId: number, quantity: number) {
    const currentCart = this.cartSubject$.getValue();
    const updatedCart = currentCart.map(cartItem =>
      cartItem.product.id === productId
        ? { ...cartItem, quantity }
        : cartItem
    );
    this.cartSubject$.next(updatedCart);
  }

  decreaseItemQuantity(productId: number) {
    const currentCart = this.cartSubject$.getValue();
    const existingItemIndex = currentCart.findIndex(cartItem => cartItem.product.id === productId);

    if (existingItemIndex !== -1) {
      const updatedCart = [...currentCart];
      const currentQuantity = updatedCart[existingItemIndex].quantity;

      if (currentQuantity > 1) {
        updatedCart[existingItemIndex] = {
          ...updatedCart[existingItemIndex],
          quantity: currentQuantity - 1
        };
        this.cartSubject$.next(updatedCart);
      } else {
        this.removeItemFromCart(productId);
      }
    }
  }

  clearCart() {
    this.cartSubject$.next([]);
  }
}
