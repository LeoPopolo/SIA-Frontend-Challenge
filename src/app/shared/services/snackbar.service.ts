import { inject, Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {
  private readonly snackbar = inject(MatSnackBar);

  open(message: string, action: string = 'OK', duration: number = 3000) {
    this.snackbar.open(message, action, {
      duration,
      horizontalPosition: 'right',
      panelClass: ['Snackbar']
    });
  }
}
