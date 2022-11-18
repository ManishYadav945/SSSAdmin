import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthMedicineComponent } from './health-medicine.component';

describe('HealthMedicineComponent', () => {
  let component: HealthMedicineComponent;
  let fixture: ComponentFixture<HealthMedicineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HealthMedicineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthMedicineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
