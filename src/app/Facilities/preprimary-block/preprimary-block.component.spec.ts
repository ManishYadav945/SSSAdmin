import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreprimaryBlockComponent } from './preprimary-block.component';

describe('PreprimaryBlockComponent', () => {
  let component: PreprimaryBlockComponent;
  let fixture: ComponentFixture<PreprimaryBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreprimaryBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreprimaryBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
