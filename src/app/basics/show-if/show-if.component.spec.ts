import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowIfComponent } from './show-if.component';

describe('ShowIfComponent', () => {
  let component: ShowIfComponent;
  let fixture: ComponentFixture<ShowIfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowIfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowIfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
