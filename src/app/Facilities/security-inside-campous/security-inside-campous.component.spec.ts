import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityInsideCampousComponent } from './security-inside-campous.component';

describe('SecurityInsideCampousComponent', () => {
  let component: SecurityInsideCampousComponent;
  let fixture: ComponentFixture<SecurityInsideCampousComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecurityInsideCampousComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecurityInsideCampousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
