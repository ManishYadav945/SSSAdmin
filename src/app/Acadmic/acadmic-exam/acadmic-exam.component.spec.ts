import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcadmicExamComponent } from './acadmic-exam.component';

describe('AcadmicExamComponent', () => {
  let component: AcadmicExamComponent;
  let fixture: ComponentFixture<AcadmicExamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcadmicExamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcadmicExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
