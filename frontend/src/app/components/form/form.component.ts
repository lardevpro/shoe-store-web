import { Component, EventEmitter, HostListener, Input, OnDestroy, Output } from '@angular/core';
import {
  FormGroup,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { Subject } from 'rxjs';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { ContactFormData } from '../../services/contact-form.service.spec';


@Component({
  selector: 'app-form',
  imports: [ReactiveFormsModule,
           NzButtonModule, 
           NzFormModule, 
           NzInputModule,
           NzAlertModule],
  templateUrl: './form.component.html',
  styleUrl : './form.component.scss',
})


export class FormComponent implements OnDestroy {

  @Input() loading = false;
  @Input() successMessage = '';
  @Input() errorMessage = '';
  @Output() formSubmit = new EventEmitter<ContactFormData>();
  @Output() formReset = new EventEmitter<void>();
  offset = window.innerWidth <= 768 ? 0 : 7;

  validateForm: FormGroup;
  private destroy$ = new Subject<void>();
  
  constructor(private fb: NonNullableFormBuilder) {
    this.validateForm = this.fb.group({
      userName: ['', [Validators.required]],
      email: ['', [Validators.email, Validators.required]],
      comment: ['', [Validators.required]]
    });
  }

 

  submitForm(): void {
    if (this.validateForm.valid) {
      const formValue: ContactFormData = this.validateForm.value as ContactFormData;
      this.formSubmit.emit(formValue);
    }
  }


   resetForm(e: MouseEvent): void {
    e.preventDefault();
    this.validateForm.reset();
    this.formReset.emit();
  }
   

  @HostListener('document:click', ['$event'])
    onDocumentClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    if (!target.closest('nz-alert')) {
      this.successMessage = '';
      this.errorMessage = '';
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
