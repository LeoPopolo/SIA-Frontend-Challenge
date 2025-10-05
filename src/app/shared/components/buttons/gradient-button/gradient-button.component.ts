import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-gradient-button',
  standalone: true,
  imports: [],
  templateUrl: './gradient-button.component.html',
  styleUrl: './gradient-button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GradientButtonComponent {
  viewTransitionName = input<string>('');

}
