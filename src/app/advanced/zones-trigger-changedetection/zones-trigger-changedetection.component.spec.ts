import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZonesTriggerChangedetectionComponent } from './zones-trigger-changedetection.component';

describe('ZonesTriggerChangedetectionComponent', () => {
  let component: ZonesTriggerChangedetectionComponent;
  let fixture: ComponentFixture<ZonesTriggerChangedetectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZonesTriggerChangedetectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZonesTriggerChangedetectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
