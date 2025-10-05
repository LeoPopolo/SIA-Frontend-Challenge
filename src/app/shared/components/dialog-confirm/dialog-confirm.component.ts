import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { SimpleButtonComponent } from "../buttons/simple-button/simple-button.component";

@Component({
  selector: 'app-dialog-confirm',
  standalone: true,
  imports: [SimpleButtonComponent],
  templateUrl: './dialog-confirm.component.html',
  styleUrl: './dialog-confirm.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DialogConfirmComponent implements OnInit {
  private readonly dialogData = inject<IDialogData>(MAT_DIALOG_DATA);
  private readonly dialogRef = inject(MatDialogRef);
  private readonly sanitizer = inject(DomSanitizer);

  title = signal<string>(this.dialogData.title || '');
  text = signal<string>(this.dialogData.text || '');
  html = signal<string>(this.dialogData.html || '');

  safeHtml = signal<SafeHtml | null>(null);

  ngOnInit(): void {
    if (this.html()) {
      this.safeHtml.set(this.sanitizer.bypassSecurityTrustHtml(this.html()));
    }
  }

  confirm() {
    this.dialogRef.close({ action: 'confirm' });
  }

  cancel() {
    this.dialogRef.close({ action: 'cancel' });
  }
}

interface IDialogData {
  title: string;
  text?: string;
  html?: string;
}
