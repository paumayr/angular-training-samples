import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataFromObservableComponent } from './data-from-observable.component';

describe('DataFromObservableComponent', () => {
  let component: DataFromObservableComponent;
  let fixture: ComponentFixture<DataFromObservableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataFromObservableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataFromObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
