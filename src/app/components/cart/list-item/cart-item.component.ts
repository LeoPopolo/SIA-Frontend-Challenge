import { ChangeDetectionStrategy, Component, computed, input, output } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { CartItem } from '@models/cart.model';

@Component({
  selector: 'app-cart-item',
  standalone: true,
  imports: [MatIcon],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartItemComponent {
  product = input.required<CartItem>();

  getSubtotal = computed(() => this.product().product.price * this.product().quantity);

  onAction = output<{ type: 'add' | 'remove' | 'delete'; product: CartItem }>();

  addItem() {
    this.onAction.emit({ type: 'add', product: this.product() });
  }

  removeItem() {
    this.onAction.emit({ type: 'remove', product: this.product() });
  }

  deleteItem() {
    this.onAction.emit({ type: 'delete', product: this.product() });
  }
}
