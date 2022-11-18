import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportantlinkComponent } from './importantlink.component';

describe('ImportantlinkComponent', () => {
  let component: ImportantlinkComponent;
  let fixture: ComponentFixture<ImportantlinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImportantlinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportantlinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
