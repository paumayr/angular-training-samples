import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputBindingsComponent } from './input-bindings.component';

describe('InputBindingsComponent', () => {
  let component: InputBindingsComponent;
  let fixture: ComponentFixture<InputBindingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputBindingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputBindingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
