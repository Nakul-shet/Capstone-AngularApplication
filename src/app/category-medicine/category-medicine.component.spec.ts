import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryMedicineComponent } from './category-medicine.component';

describe('CategoryMedicineComponent', () => {
  let component: CategoryMedicineComponent;
  let fixture: ComponentFixture<CategoryMedicineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryMedicineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryMedicineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
