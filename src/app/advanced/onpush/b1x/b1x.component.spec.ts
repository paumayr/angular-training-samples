import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { B1xComponent } from './b1x.component';

describe('B1xComponent', () => {
  let component: B1xComponent;
  let fixture: ComponentFixture<B1xComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ B1xComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(B1xComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
