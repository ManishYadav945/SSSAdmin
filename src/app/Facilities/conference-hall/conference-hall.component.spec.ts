import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConferenceHallComponent } from './conference-hall.component';

describe('ConferenceHallComponent', () => {
  let component: ConferenceHallComponent;
  let fixture: ComponentFixture<ConferenceHallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConferenceHallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConferenceHallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
