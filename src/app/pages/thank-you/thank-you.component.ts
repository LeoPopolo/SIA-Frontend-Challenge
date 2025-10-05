import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { GradientButtonComponent } from "@shared/components/buttons/gradient-button/gradient-button.component";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-thank-you',
  standalone: true,
  imports: [GradientButtonComponent, MatIcon, RouterLink],
  templateUrl: './thank-you.component.html',
  styleUrl: './thank-you.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThankYouComponent {
  code = this.getRandomCode();

  getRandomCode(): string {
    return Math.random().toString(36).substring(2, 8).toUpperCase();
  }
}
