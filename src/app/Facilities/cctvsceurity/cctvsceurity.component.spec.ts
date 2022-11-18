import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CCTVSceurityComponent } from './cctvsceurity.component';

describe('CCTVSceurityComponent', () => {
  let component: CCTVSceurityComponent;
  let fixture: ComponentFixture<CCTVSceurityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CCTVSceurityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CCTVSceurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
