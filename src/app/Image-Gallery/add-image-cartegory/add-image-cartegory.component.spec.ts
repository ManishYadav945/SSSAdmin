import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddImageCartegoryComponent } from './add-image-cartegory.component';

describe('AddImageCartegoryComponent', () => {
  let component: AddImageCartegoryComponent;
  let fixture: ComponentFixture<AddImageCartegoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddImageCartegoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddImageCartegoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
