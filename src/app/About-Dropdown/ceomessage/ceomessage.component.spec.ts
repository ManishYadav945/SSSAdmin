import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CEOMessageComponent } from './ceomessage.component';

describe('CEOMessageComponent', () => {
  let component: CEOMessageComponent;
  let fixture: ComponentFixture<CEOMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CEOMessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CEOMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
