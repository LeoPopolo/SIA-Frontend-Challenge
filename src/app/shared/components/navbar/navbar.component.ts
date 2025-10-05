import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { CartService } from '@services/cart.service';
import { GradientButtonComponent } from "@shared/components/buttons/gradient-button/gradient-button.component";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatIcon, GradientButtonComponent, AsyncPipe, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent {
  private readonly cartService = inject(CartService);

  cartTotal$ = this.cartService.cartTotal$;
}
