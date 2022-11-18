import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DanceRoomComponent } from './dance-room.component';

describe('DanceRoomComponent', () => {
  let component: DanceRoomComponent;
  let fixture: ComponentFixture<DanceRoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DanceRoomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DanceRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
