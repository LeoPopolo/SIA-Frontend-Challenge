import {
  ChangeDetectionStrategy,
  Component,
  inject,
  model,
  OnInit,
  signal,
} from '@angular/core';
import { Product } from '@models/product.model';
import { ProductService } from '@services/product.service';
import { delay, finalize } from 'rxjs';
import { CardComponent } from '@shared/components/card/card.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { Router } from '@angular/router';
import { ProductFiltersComponent } from '@components/products/product-filters/product-filters.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardComponent, NgxSkeletonLoaderModule, ProductFiltersComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  private readonly productService = inject(ProductService);
  private readonly router = inject(Router);

  products = signal<Product[]>([]);

  loading = signal<boolean>(false);

  filters = signal<{ category: string | null; priceRange: number[]; searchFilter: string | null }>({
    category: null,
    priceRange: [0, 0],
    searchFilter: null,
  });

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.loading.set(true);

    this.productService
      .getProducts(
        this.filters()
      )
      .pipe(
        delay(1500),
        finalize(() => this.loading.set(false))
      )
      .subscribe((data) => {
        this.products.set(data);
      });
  }

  gotoProductDetail(id: number) {
    this.router.navigate(['/product', id]);
  }

  handleFilterChange(event: { category: string | null; priceRange: number[]; searchFilter: string | null }) {
    this.filters.set(event);

    this.getProducts();
  }
}
