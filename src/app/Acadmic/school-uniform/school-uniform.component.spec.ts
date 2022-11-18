import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolUniformComponent } from './school-uniform.component';

describe('SchoolUniformComponent', () => {
  let component: SchoolUniformComponent;
  let fixture: ComponentFixture<SchoolUniformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchoolUniformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolUniformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
