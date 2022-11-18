import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutLIPSComponent } from './about-lips.component';

describe('AboutLIPSComponent', () => {
  let component: AboutLIPSComponent;
  let fixture: ComponentFixture<AboutLIPSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutLIPSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutLIPSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
