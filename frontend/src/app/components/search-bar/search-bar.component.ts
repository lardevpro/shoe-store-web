import { Component, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'app-search-bar',
  imports: [FormsModule, NzAutocompleteModule, NzInputModule, NzIconModule],
  encapsulation: ViewEncapsulation.None,
  template: `
    <form (submit)="onSearch($event)">
      <nz-input-group [nzSuffix]="suffixIcon">
        <input nz-input [(ngModel)]="value" name="search" [nzAutocomplete]="auto" placeholder="Buscar en Google" />
      </nz-input-group>
    </form>
    <ng-template #suffixIcon>
      <button nz-button nzType="text" (click)="onSearch($event)">
        <span nz-icon nzType="search"></span>
      </button>
    </ng-template>
    <nz-autocomplete [nzDataSource]="[]" #auto></nz-autocomplete>
  `,
  styles: `
    nz-input-group {
      width: 200px;
    }
    button {
      border: none;
      background: transparent;
      cursor: pointer;
      padding: 0;
    }
  `
})
export class NzDemoAutoCompleteStatusComponent {
  value?: string;

  onSearch(event: Event): void {
    event.preventDefault();
    if (this.value && this.value.trim()) {
      const query = encodeURIComponent(this.value.trim());
      const url = `https://www.google.com/search?q=${query}`;
      window.open(url, '_blank');
      this.value = '';
    }
  }
}