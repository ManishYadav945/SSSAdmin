import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyLIPSComponent } from './why-lips.component';

describe('WhyLIPSComponent', () => {
  let component: WhyLIPSComponent;
  let fixture: ComponentFixture<WhyLIPSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhyLIPSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhyLIPSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
