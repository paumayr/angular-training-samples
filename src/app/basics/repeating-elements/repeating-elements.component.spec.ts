import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepeatingElementsComponent } from './repeating-elements.component';

describe('RepeatingElementsComponent', () => {
  let component: RepeatingElementsComponent;
  let fixture: ComponentFixture<RepeatingElementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepeatingElementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepeatingElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
