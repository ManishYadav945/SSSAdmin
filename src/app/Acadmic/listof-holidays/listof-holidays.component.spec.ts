import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListofHolidaysComponent } from './listof-holidays.component';

describe('ListofHolidaysComponent', () => {
  let component: ListofHolidaysComponent;
  let fixture: ComponentFixture<ListofHolidaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListofHolidaysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListofHolidaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
