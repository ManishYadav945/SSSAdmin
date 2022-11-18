import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhysicsLabComponent } from './physics-lab.component';

describe('PhysicsLabComponent', () => {
  let component: PhysicsLabComponent;
  let fixture: ComponentFixture<PhysicsLabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhysicsLabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhysicsLabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
