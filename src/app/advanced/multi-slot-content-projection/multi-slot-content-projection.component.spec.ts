import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiSlotContentProjectionComponent } from './multi-slot-content-projection.component';

describe('MultiSlotContentProjectionComponent', () => {
  let component: MultiSlotContentProjectionComponent;
  let fixture: ComponentFixture<MultiSlotContentProjectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiSlotContentProjectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiSlotContentProjectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
