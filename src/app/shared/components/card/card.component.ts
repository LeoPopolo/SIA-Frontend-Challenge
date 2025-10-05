import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { GradientButtonComponent } from "@shared/components/buttons/gradient-button/gradient-button.component";
import { computed, signal } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [GradientButtonComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent {
  id = input.required<number>();
  header = input.required<string | number>();
  subHeader = input.required<string>();
  detail = input.required<string>();
  actionTitle = input.required<string>();
  imageUrl = input<string | null>();

  onAction = output<void>();

  private _imageError = signal(false);

  currentImageUrl = computed(() => {
    if (this._imageError()) {
      return 'assets/img/default-image.png';
    }
    return this.imageUrl();
  });

  onImageError() {
    this._imageError.set(true);
  }

  onHandleAction() {
    this.onAction.emit();
  }
}
