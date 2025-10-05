import { ChangeDetectionStrategy, Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { CartItem } from '@models/cart.model';
import { CartService } from '@services/cart.service';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { distinctUntilChanged } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CartItemComponent } from "@components/cart/list-item/cart-item.component";
import { AsyncPipe } from '@angular/common';
import { GradientButtonComponent } from "@shared/components/buttons/gradient-button/gradient-button.component";
import { MatIcon } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { DialogConfirmComponent } from '@shared/components/dialog-confirm/dialog-confirm.component';
import { Router } from '@angular/router';
import { PurchaseService } from '@services/purchase.service';
import { PurchaseRequest } from '@models/purchase.model';
import Swal from 'sweetalert2';
import { MatProgressSpinner } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [NgxSkeletonLoaderModule, CartItemComponent, AsyncPipe, GradientButtonComponent, MatIcon, MatProgressSpinner],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartComponent implements OnInit {
  private readonly cartService = inject(CartService);
  private readonly purchaseService = inject(PurchaseService);
  private readonly dialog = inject(MatDialog);
  private readonly destroyRef = inject(DestroyRef);
  private readonly router = inject(Router);

  loading = signal<boolean>(false);
  loadingSend = signal<boolean>(false);

  cartTotal$ = this.cartService.cartTotal$;

  cart = signal<CartItem[]>([]);

  ngOnInit(): void {
    this.getCart();
  }

  getCart() {
    this.loading.set(true);

    this.cartService.cart$
    .pipe(
      distinctUntilChanged(),
      takeUntilDestroyed(this.destroyRef)
    )
    .subscribe({
      next: (cart) => {
        this.cart.set(cart);
        this.loading.set(false);
      }
    });
  }

  handleCartItemAction(event: { type: 'add' | 'remove' | 'delete'; product: CartItem }) {
    switch (event.type) {
      case 'add':
        this.cartService.setItemToCart(event.product.product);
        break;
      case 'remove':
        this.cartService.decreaseItemQuantity(event.product.product.id);
        break;
      case 'delete':
        this.cartService.removeItemFromCart(event.product.product.id);
        break;
    }
  }

  finishPurchase() {
    const dialog = this.dialog.open(DialogConfirmComponent, {
      data: {
        title: 'Finalizar pedido',
        text: '¿Estás seguro de que deseas finalizar el pedido?',
      }
    });

    dialog.afterClosed().subscribe(result => {
      if (result?.action === 'confirm') {
        this.sendPurchase();
      }
    });
  }

  sendPurchase() {
    const _data: PurchaseRequest = {
      products: [...this.cart()]
    }

    this.loadingSend.set(true);

    this.purchaseService.createPurchase(_data).then(
      () => {
        this.cartService.clearCart();
        this.router.navigate(['/thankyoupage']);
      },
      err => {
        Swal.fire({
          title: 'Error al procesar el pedido',
          text: err.message,
          icon: "error",
          confirmButtonColor: '#303030',
          confirmButtonText: 'Aceptar',
          backdrop: true,
          allowOutsideClick: false,
          heightAuto: false,
        })
      }
    ).finally(() => {
      this.loadingSend.set(false);
    });
  }
}
