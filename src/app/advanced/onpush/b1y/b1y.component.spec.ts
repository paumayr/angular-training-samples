import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { B1yComponent } from './b1y.component';

describe('B1yComponent', () => {
  let component: B1yComponent;
  let fixture: ComponentFixture<B1yComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ B1yComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(B1yComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
