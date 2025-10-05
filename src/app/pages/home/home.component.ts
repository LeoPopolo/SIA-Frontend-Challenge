import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { Product } from '@models/product.model';
import { ProductService } from '@services/product.service';
import { delay, finalize } from 'rxjs';
import { CardComponent } from "@shared/components/card/card.component";
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardComponent, MatProgressBarModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  private readonly productService = inject(ProductService);
  private readonly router = inject(Router);

  products = signal<Product[]>([]);

  loading = signal<boolean>(false);

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.loading.set(true);

    this.productService.getProducts()
    .pipe(
      delay(1500),
      finalize(() => this.loading.set(false)),
    )
    .subscribe(data => {
      this.products.set(data);
    })
  }

  gotoProductDetail(id: number) {
    this.router.navigate(['/product', id]);
  }
}
