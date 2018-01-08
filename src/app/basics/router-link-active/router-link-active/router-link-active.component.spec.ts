import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterLinkActiveComponent } from './router-link-active.component';

describe('RouterLinkActiveComponent', () => {
  let component: RouterLinkActiveComponent;
  let fixture: ComponentFixture<RouterLinkActiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouterLinkActiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterLinkActiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
