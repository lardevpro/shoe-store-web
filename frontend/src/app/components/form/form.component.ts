import { Component, inject, OnDestroy } from '@angular/core';
import {
  AbstractControl,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  ValidationErrors,
  Validators
} from '@angular/forms';
import { Subject } from 'rxjs';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { ContactFormData, ContactFormService } from '../../services/contact.form.service';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-form',
  imports: [ReactiveFormsModule, NzButtonModule, NzFormModule, NzInputModule],
  template: `
    <form nz-form [formGroup]="validateForm" (ngSubmit)="submitForm()">
      <nz-form-item>
        <nz-form-label [nzSpan]="7" nzRequired>Nombre</nz-form-label>
        <nz-form-control [nzSpan]="12" nzHasFeedback [nzErrorTip]="userErrorTpl">
          <input nz-input formControlName="userName" placeholder="Escriba aquí su nombre" />
          <ng-template #userErrorTpl let-control>
            @if (control.errors?.['required']) {
              ¡Por favor, escriba su nombre!
            }
          </ng-template>
        </nz-form-control>
      </nz-form-item>
      <nz-form-item>
        <nz-form-label [nzSpan]="7" nzRequired>Email de contacto</nz-form-label>
        <nz-form-control [nzSpan]="12" nzHasFeedback [nzErrorTip]="emailErrorTpl">
          <input nz-input formControlName="email" placeholder="Escriba aquí su email para que podamos responderle" type="email" />
          <ng-template #emailErrorTpl let-control>
            @if (control.errors?.['email']) {
              El email no es válido.
            }
            @if (control.errors?.['required']) {
              ¡Por favor, escriba su email!
            }
          </ng-template>
        </nz-form-control>
      </nz-form-item>
      <nz-form-item>
        <nz-form-label [nzSpan]="7" nzRequired>Consulta</nz-form-label>
        <nz-form-control [nzSpan]="12" nzHasFeedback nzErrorTip="Por favor, escriba su consulta.">
          <nz-textarea-count [nzMaxCharacterCount]="2000">
            <textarea formControlName="comment" nz-input rows="2" placeholder="Escriba aquí su consulta"></textarea>
          </nz-textarea-count>
        </nz-form-control>
      </nz-form-item>
      <nz-form-item>
        <nz-form-control [nzOffset]="7" [nzSpan]="12">
          <button nz-button nzType="primary" [disabled]="!validateForm.valid || loading">Enviar Consulta</button>
          <button nz-button (click)="resetForm($event)">Limpiar campos</button>
        </nz-form-control>
      </nz-form-item>
      <div *ngIf="successMessage" style="color: green; margin-top: 16px;">{{ successMessage }}</div>
      <div *ngIf="errorMessage" style="color: red; margin-top: 16px;">{{ errorMessage }}</div>
    </form>
  `,
  styles: [
    `
      [nz-form] {
        max-width: 600px;
      }
      button {
        margin-left: 8px;
        border-radius: var(--border-radius);
        background-color: rgb(246, 115, 246);
      }
    `
  ]
})
export class FormComponent implements OnDestroy {
  private fb = inject(NonNullableFormBuilder);
  private contactFormService = inject(ContactFormService);
  private destroy$ = new Subject<void>();

  validateForm = this.fb.group({
    userName: this.fb.control('', [Validators.required]),
    email: this.fb.control('', [Validators.email, Validators.required]),
    comment: this.fb.control('', [Validators.required])
  });

  loading = false;
  successMessage = '';
  errorMessage = '';

  submitForm(): void {
    if (this.validateForm.invalid) return;
    this.successMessage = '';
    this.errorMessage = '';
    this.loading = true;

    const rawValue = this.validateForm.value;
    const formValue: ContactFormData = {
      userName: rawValue.userName ?? '',
      email: rawValue.email ?? '',
      comment: rawValue.comment ?? ''
    };

    this.contactFormService.sendContactForm(formValue)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (res) => {
          this.successMessage = '¡Consulta enviada correctamente!';
          this.loading = false;
          this.validateForm.reset();
        },
        error: (err) => {
          this.errorMessage = err?.error?.error || 'Error al enviar la consulta. Inténtalo de nuevo.';
          this.loading = false;
        }
      });
  }

  resetForm(e: MouseEvent): void {
    e.preventDefault();
    this.validateForm.reset();
    this.successMessage = '';
    this.errorMessage = '';
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
