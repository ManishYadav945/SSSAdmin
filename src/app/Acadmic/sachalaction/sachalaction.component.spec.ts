import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SachalactionComponent } from './sachalaction.component';

describe('SachalactionComponent', () => {
  let component: SachalactionComponent;
  let fixture: ComponentFixture<SachalactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SachalactionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SachalactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
