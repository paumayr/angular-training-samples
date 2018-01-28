import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsServiceUnsubscribeComponent } from './rxjs-service-unsubscribe.component';

describe('RxjsServiceUnsubscribeComponent', () => {
  let component: RxjsServiceUnsubscribeComponent;
  let fixture: ComponentFixture<RxjsServiceUnsubscribeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxjsServiceUnsubscribeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsServiceUnsubscribeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
