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
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzTypographyModule } from 'ng-zorro-antd/typography';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NzButtonModule,
    NzFormModule,
    NzInputModule,
    NzCardModule,
    NzTypographyModule
  ],
  template: `
    <nz-card class="form-card" [nzBodyStyle]="{ padding: '2rem' }">
      <h1 nz-typography nzTitle class="form-title">Formulario de Contacto</h1>
      
      <form nz-form [formGroup]="validateForm" (ngSubmit)="submitForm()">
        <nz-form-item>
          <nz-form-label [nzSpan]="7" nzRequired>Nombre</nz-form-label>
          <nz-form-control [nzSpan]="12" nzHasFeedback [nzErrorTip]="userErrorTpl">
            <input nz-input formControlName="userName" placeholder="Escribe tu nombre" />
            <ng-template #userErrorTpl let-control>
              @if (control.errors?.['required']) {
                <span class="error-text">Por favor ingresa tu nombre</span>
              }
            </ng-template>
          </nz-form-control>
        </nz-form-item>

        <nz-form-item>
          <nz-form-label [nzSpan]="7" nzRequired>Correo Electrónico</nz-form-label>
          <nz-form-control [nzSpan]="12" nzHasFeedback [nzErrorTip]="emailErrorTpl">
            <input nz-input formControlName="email" placeholder="ejemplo@email.com" type="email" />
            <ng-template #emailErrorTpl let-control>
              @if (control.errors?.['email']) {
                <span class="error-text">El formato del email no es válido</span>
              }
              @if (control.errors?.['required']) {
                <span class="error-text">Por favor ingresa tu email</span>
              }
            </ng-template>
          </nz-form-control>
        </nz-form-item>

        <nz-form-item>
          <nz-form-label [nzSpan]="7" nzRequired>Consulta</nz-form-label>
          <nz-form-control [nzSpan]="12" nzHasFeedback [nzErrorTip]="commentErrorTpl">
            <nz-textarea-count [nzMaxCharacterCount]="2000">
              <textarea formControlName="comment" nz-input rows="4" 
                placeholder="Escribe tu consulta aquí..."></textarea>
            </nz-textarea-count>
            <ng-template #commentErrorTpl let-control>
              @if (control.errors?.['required']) {
                <span class="error-text">Por favor escribe tu consulta</span>
              }
            </ng-template>
          </nz-form-control>
        </nz-form-item>

        <nz-form-item>
          <nz-form-control [nzOffset]="7" [nzSpan]="12">
            <div class="button-group">
              <button nz-button nzType="primary" [disabled]="!validateForm.valid">Enviar</button>
              <button nz-button (click)="resetForm($event)">Limpiar</button>
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
      
      .form-title {
        color: #8b5e3c;
        text-align: center;
        margin-bottom: 2rem;
        text-shadow: 0 2px 8px rgba(162, 89, 207, 0.08);
      }

      nz-form-label {
        color: #6d3995 !important;
        font-weight: 500;
      }

      input, textarea {
        border-radius: 12px !important;
        background: white !important;
        border: 1px solid #dac1f8 !important;
        transition: all 0.3s;

        &:focus {
          border-color: #a259cf !important;
          box-shadow: 0 0 8px rgba(162, 89, 207, 0.2) !important;
        }
      }

      .button-group {
        display: flex;
        gap: 1rem;
        justify-content: center;

        button {
          border-radius: 30px;
          padding: 0 2rem;
          height: 40px;
          font-weight: 500;
          transition: all 0.3s;

          &[nztype="primary"] {
            background: linear-gradient(90deg, #a259cf 0%, #b97a56 100%);
            border: none;
            color: white;

            &:hover {
              transform: translateY(-2px);
              box-shadow: 0 6px 24px rgba(162, 89, 207, 0.18);
            }
          }

          &:not([nztype="primary"]) {
            border: 1px solid #a259cf;
            color: #6d3995;
            
            &:hover {
              background-color: rgba(162, 89, 207, 0.1);
            }
          }
        }
      }

      .error-text {
        color: #ff4d4f;
        font-size: 0.875rem;
      }
    }

    @media (max-width: 768px) {
      .form-card {
        margin: 1rem;
        padding: 1rem;
   
        .button-group {
          flex-direction: column;
          
          button {
            width: 100%;
          }
        }
      }
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

  submitForm(): void {
    if (this.validateForm.valid) {
      console.log('Formulario enviado:', this.validateForm.value);
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
