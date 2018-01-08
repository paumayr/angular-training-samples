import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoisyCompComponent } from './noisy-comp.component';

describe('NoisyCompComponent', () => {
  let component: NoisyCompComponent;
  let fixture: ComponentFixture<NoisyCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoisyCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoisyCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
