import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotVsColdObservableComponent } from './hot-vs-cold-observable.component';

describe('HotVsColdObservableComponent', () => {
  let component: HotVsColdObservableComponent;
  let fixture: ComponentFixture<HotVsColdObservableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotVsColdObservableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotVsColdObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
