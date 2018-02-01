import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsStylingComponent } from './forms-styling.component';

describe('FormsStylingComponent', () => {
  let component: FormsStylingComponent;
  let fixture: ComponentFixture<FormsStylingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormsStylingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsStylingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
