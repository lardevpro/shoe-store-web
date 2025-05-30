import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogAccesoriesComponent } from './catalog-accesories.component';

describe('CatalogAccesoriesComponent', () => {
  let component: CatalogAccesoriesComponent;
  let fixture: ComponentFixture<CatalogAccesoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatalogAccesoriesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatalogAccesoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
