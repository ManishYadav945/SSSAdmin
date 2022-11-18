import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorsonCampousComponent } from './doctorson-campous.component';

describe('DoctorsonCampousComponent', () => {
  let component: DoctorsonCampousComponent;
  let fixture: ComponentFixture<DoctorsonCampousComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorsonCampousComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorsonCampousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
