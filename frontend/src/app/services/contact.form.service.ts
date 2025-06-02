import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ContactFormData {
  userName: string;
  email: string;
  comment: string;
}

@Injectable({ providedIn: 'root' })
export class ContactFormService {
  private apiUrl = 'http://localhost:1234/contact';

  constructor(private http: HttpClient) {}

  sendContactForm(data: ContactFormData): Observable<any> {
    return this.http.post<any>(this.apiUrl, data);
  }
}
