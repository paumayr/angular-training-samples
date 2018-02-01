import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HostStylingComponentComponent } from './host-styling-component.component';

describe('HostStylingComponentComponent', () => {
  let component: HostStylingComponentComponent;
  let fixture: ComponentFixture<HostStylingComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HostStylingComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostStylingComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
