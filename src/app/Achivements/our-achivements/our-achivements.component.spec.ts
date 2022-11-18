import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurAchivementsComponent } from './our-achivements.component';

describe('OurAchivementsComponent', () => {
  let component: OurAchivementsComponent;
  let fixture: ComponentFixture<OurAchivementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurAchivementsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OurAchivementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
