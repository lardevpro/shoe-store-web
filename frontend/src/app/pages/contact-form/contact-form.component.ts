import { Component } from '@angular/core';
import { FormComponent } from "../../components/form/form.component";
import { ContactFormData, ContactFormService } from '../../services/contact-form.service.spec';

@Component({
  selector: 'app-contact-form',
  imports: [FormComponent],
  template: `
        <div class="contact-container">
          <app-form
                [loading]="loading"
                [successMessage]="successMessage"
                [errorMessage]="errorMessage"
                (formSubmit)="onFormSubmit($event)"
                (formReset)="onFormReset()"
              ></app-form>
          </div>
          `,
  styles: `
      .contact-container {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: calc(100vh - 116px);
          padding: 20px;
      }

    app-form {
      width: 100%;
      max-width: 600px; 
    }
  
  `
})
export class ContactFormComponent {

  loading = false;
  successMessage = '';
  errorMessage = '';

  constructor(private contactFormService: ContactFormService) {}

  onFormSubmit(formData: ContactFormData): void {
    this.loading = true;
    this.successMessage = '';
    this.errorMessage = '';

    this.contactFormService.sendContactForm(formData).subscribe({
      next: (res) => {
        this.successMessage = '¡Consulta enviada correctamente!';
        this.loading = false;
      },
      error: (err) => {
        this.errorMessage = err?.error?.error || 'Error al enviar la consulta. Inténtalo de nuevo.';
        this.loading = false;
      }
    });
  }

  onFormReset(): void {
    this.successMessage = '';
    this.errorMessage = '';
  }
}



