import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { GradientButtonComponent } from "@shared/components/buttons/gradient-button/gradient-button.component";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatIcon, GradientButtonComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent {

}
