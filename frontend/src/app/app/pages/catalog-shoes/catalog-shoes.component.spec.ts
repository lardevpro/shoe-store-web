import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogShoesComponent } from './catalog-shoes.component';

describe('CatalogShoesComponent', () => {
  let component: CatalogShoesComponent;
  let fixture: ComponentFixture<CatalogShoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatalogShoesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatalogShoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
