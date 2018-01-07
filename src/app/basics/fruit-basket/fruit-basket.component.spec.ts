import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FruitBasketComponent } from './fruit-basket.component';

describe('FruitBasketComponent', () => {
  let component: FruitBasketComponent;
  let fixture: ComponentFixture<FruitBasketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FruitBasketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FruitBasketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
