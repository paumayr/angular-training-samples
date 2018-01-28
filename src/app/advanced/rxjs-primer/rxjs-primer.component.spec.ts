import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsPrimerComponent } from './rxjs-primer.component';

describe('RxjsPrimerComponent', () => {
  let component: RxjsPrimerComponent;
  let fixture: ComponentFixture<RxjsPrimerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxjsPrimerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsPrimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
