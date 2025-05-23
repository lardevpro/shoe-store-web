import { Component } from '@angular/core';
import { FormComponent } from "../../components/form/form.component";

@Component({
  selector: 'app-contact',
  imports: [FormComponent],
  template: `<div class="contact-container">
                <app-form></app-form>
            </div>`,
  styles: `
        .contact-container {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: calc(100vh - 116px); /* Ajusta esto según la altura de tu navbar y footer */
      padding: 20px;
    }

    app-form {
      width: 100%;
      max-width: 600px; /* Ajusta este valor según el ancho deseado para tu formulario */
    }
  
  `
})
export class ContactComponent {

}
