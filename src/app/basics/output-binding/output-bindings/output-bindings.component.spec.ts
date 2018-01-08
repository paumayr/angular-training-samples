import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputBindingsComponent } from './output-bindings.component';

describe('OutputBindingsComponent', () => {
  let component: OutputBindingsComponent;
  let fixture: ComponentFixture<OutputBindingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutputBindingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutputBindingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
