import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogBagsComponent } from './catalog-bags.component';

describe('CatalogBagsComponent', () => {
  let component: CatalogBagsComponent;
  let fixture: ComponentFixture<CatalogBagsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatalogBagsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatalogBagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
