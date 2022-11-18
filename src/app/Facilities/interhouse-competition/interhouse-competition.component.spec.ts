import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterhouseCompetitionComponent } from './interhouse-competition.component';

describe('InterhouseCompetitionComponent', () => {
  let component: InterhouseCompetitionComponent;
  let fixture: ComponentFixture<InterhouseCompetitionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterhouseCompetitionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterhouseCompetitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
