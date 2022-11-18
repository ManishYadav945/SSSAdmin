import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalSecurityComponent } from './professional-security.component';

describe('ProfessionalSecurityComponent', () => {
  let component: ProfessionalSecurityComponent;
  let fixture: ComponentFixture<ProfessionalSecurityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfessionalSecurityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessionalSecurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
