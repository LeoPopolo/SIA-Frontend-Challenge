import { ChangeDetectionStrategy, Component, DestroyRef, inject, model, OnInit, output, signal } from '@angular/core';
import { ProductService } from '@services/product.service';
import { CommonModule } from '@angular/common';
import { MatSliderModule } from '@angular/material/slider';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SimpleButtonComponent } from "@shared/components/buttons/simple-button/simple-button.component";
import { debounceTime, distinctUntilChanged } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-product-filters',
  standalone: true,
  imports: [CommonModule, MatSliderModule, FormsModule, ReactiveFormsModule, SimpleButtonComponent],
  templateUrl: './product-filters.component.html',
  styleUrl: './product-filters.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductFiltersComponent implements OnInit {
  private readonly productService = inject(ProductService);
  private readonly destroyRef = inject(DestroyRef);

  categories = signal<string[]>([]);
  selectedCategory = signal<string | null>(null);

  minPrice = signal<number>(0);
  maxPrice = signal<number>(200000);

  currentPriceRange = signal<number[]>([0, 200000]);

  moreExpensiveProductPrice = signal<number>(0);

  onFilterChange = output<{
    category: string | null;
    priceRange: number[];
    searchFilter: string | null;
  }>();

  searchFilter = new FormControl<string | null>(null);

  ngOnInit() {
    this.getCategories();
    this.getMoreExpensiveProduct();
    this.listenFormControlChange();
  }

  getCategories() {
    this.productService.getProductsCategories().subscribe(categories => {
      this.categories.set(categories);
    });
  }

  getMoreExpensiveProduct() {
    this.productService.getMoreExpensiveProduct().subscribe(product => {
      if (product) {
        this.moreExpensiveProductPrice.set(product.price);
        this.maxPrice.set(product.price);
        this.currentPriceRange.set([this.minPrice(), product.price]);

        this.emitFilterChange();
      }
    });
  }

  handleCategoryChange(category: string | null) {
    this.selectedCategory.set(category);
    this.emitFilterChange();
  }

  handlePriceRangeChange(value: number[]) {
    this.currentPriceRange.set(value);
    this.emitFilterChange();
  }

  emitFilterChange() {
    this.onFilterChange.emit({
      category: this.selectedCategory(),
      priceRange: this.currentPriceRange(),
      searchFilter: this.searchFilter.value,
    });
  }

  listenFormControlChange() {
    this.searchFilter.valueChanges
    .pipe(
      distinctUntilChanged(),
      takeUntilDestroyed(this.destroyRef),
      debounceTime(500),
    )
    .subscribe(() => {
      this.emitFilterChange();
    });
  }

  clearFilters() {
    this.selectedCategory.set(null);
    this.currentPriceRange.set([this.minPrice(), this.maxPrice()]);
    this.searchFilter.setValue(null);
    this.emitFilterChange();
  }

  formatPrice = (value: number): string => {
    return `$${value.toLocaleString()}`;
  };
}
