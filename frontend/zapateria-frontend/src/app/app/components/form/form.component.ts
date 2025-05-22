import { Component, inject, OnDestroy } from '@angular/core';
import {
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { Subject } from 'rxjs';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import emailjs from '@emailjs/browser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NzButtonModule,
    NzFormModule,
    NzInputModule,
    NzCardModule,
    NzTypographyModule,
    CommonModule
  ],
  template: `
    <nz-card class="form-card" [nzBodyStyle]="{ padding: '2rem' }">
      <h1 nz-typography nzTitle class="form-title">Formulario de Contacto</h1>
      <form
        nz-form
        [formGroup]="validateForm"
        #formEl
        (ngSubmit)="sendEmail(formEl)"
      >
        <nz-form-item>
          <nz-form-label [nzSpan]="7" nzRequired>Nombre</nz-form-label>
          <nz-form-control [nzSpan]="12" nzHasFeedback [nzErrorTip]="userErrorTpl">
            <input nz-input name="user_name" formControlName="userName" placeholder="Escribe tu nombre" />
            <ng-template #userErrorTpl let-control>
              <span *ngIf="control.errors?.['required']" class="error-text">Por favor ingresa tu nombre</span>
            </ng-template>
          </nz-form-control>
        </nz-form-item>

        <nz-form-item>
          <nz-form-label [nzSpan]="7" nzRequired>Correo Electrónico</nz-form-label>
          <nz-form-control [nzSpan]="12" nzHasFeedback [nzErrorTip]="emailErrorTpl">
            <input nz-input name="user_email" formControlName="email" placeholder="ejemplo@email.com" type="email" />
            <ng-template #emailErrorTpl let-control>
              <span *ngIf="control.errors?.['email']" class="error-text">El formato del email no es válido</span>
              <span *ngIf="control.errors?.['required']" class="error-text">Por favor ingresa tu email</span>
            </ng-template>
          </nz-form-control>
        </nz-form-item>

        <nz-form-item>
          <nz-form-label [nzSpan]="7" nzRequired>Consulta</nz-form-label>
          <nz-form-control [nzSpan]="12" nzHasFeedback [nzErrorTip]="commentErrorTpl">
            <textarea name="message" formControlName="comment" nz-input rows="4" placeholder="Escribe tu consulta aquí..."></textarea>
            <ng-template #commentErrorTpl let-control>
              <span *ngIf="control.errors?.['required']" class="error-text">Por favor escribe tu consulta</span>
            </ng-template>
          </nz-form-control>
        </nz-form-item>

        <nz-form-item>
          <nz-form-control [nzOffset]="7" [nzSpan]="12">
            <div class="button-group">
              <button nz-button nzType="primary" [disabled]="!validateForm.valid">Enviar</button>
              <button nz-button type="button" (click)="resetForm($event)">Limpiar</button>
            </div>
          </nz-form-control>
        </nz-form-item>
      </form>
    </nz-card>
  `,
  styles: [`
    .form-card {
      max-width: 800px;
      margin: 2rem auto;
      background: #dac1f8 !important;
      border-radius: 18px;
      box-shadow: 0 4px 20px rgba(162, 89, 207, 0.09), 0 2px 8px rgba(185, 122, 86, 0.07);
    }
    .form-title {
      color: #8b5e3c;
      text-align: center;
      margin-bottom: 2rem;
      text-shadow: 0 2px 8px rgba(162, 89, 207, 0.08);
    }
    .button-group {
      display: flex;
      justify-content: center;
      gap: 1rem;
    }
    .error-text {
      color: #ff4d4f;
      font-size: 0.875rem;
    }
  `]
})
export class FormComponent implements OnDestroy {
  private fb = inject(NonNullableFormBuilder);
  private destroy$ = new Subject<void>();

  validateForm = this.fb.group({
    userName: this.fb.control('', [Validators.required]),
    email: this.fb.control('', [Validators.email, Validators.required]),
    comment: this.fb.control('', [Validators.required])
  });

  sendEmail(form: HTMLFormElement): void {
    if (this.validateForm.valid) {
      const templateParams = {
        user_name: this.validateForm.value.userName,
        user_email: this.validateForm.value.email,
        message: this.validateForm.value.comment,
        to_email: 'carmenmariacalzadoscomplemento@gmail.com'
      };

      emailjs.send(
        'YOUR_SERVICE_ID',      // <-- Tu Service ID de EmailJS
        'YOUR_TEMPLATE_ID',     // <-- Tu Template ID de EmailJS
        templateParams,
        { publicKey: 'YOUR_PUBLIC_KEY' } // <-- Tu Public Key de EmailJS
      ).then(
        () => {
          alert('¡Mensaje enviado correctamente!');
          this.validateForm.reset();
        },
        (error) => {
          alert('Error enviando el mensaje');
          console.error(error);
        }
      );
    }
  }

  resetForm(e: MouseEvent): void {
    e.preventDefault();
    this.validateForm.reset();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
