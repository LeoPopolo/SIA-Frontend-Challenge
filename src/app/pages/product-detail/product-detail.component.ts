import { ChangeDetectionStrategy, Component, inject, input, signal } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { Product } from '@models/product.model';
import { ProductService } from '@services/product.service';
import { GradientButtonComponent } from "@shared/components/buttons/gradient-button/gradient-button.component";
import { Location } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [GradientButtonComponent, MatIcon],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductDetailComponent {
  private readonly productService = inject(ProductService);
  private readonly location = inject(Location);

  id = input<string | null>(null);

  product = signal<Product | null>(null);

  ngOnInit() {
    if (this.id()) {
      const _id = parseInt(this.id()!);

      this.getProduct(_id);
    }
  }

  getProduct(id: number) {
    this.productService.getProduct(id).subscribe(data => {
      this.product.set(data!);
    });
  }

  addToCart() {
    const product = this.product();
  }

  back() {
    this.location.back();
  }
}
