import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogSohesComponent } from './catalog-sohes.component';

describe('CatalogSohesComponent', () => {
  let component: CatalogSohesComponent;
  let fixture: ComponentFixture<CatalogSohesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatalogSohesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatalogSohesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
