import { Component, OnInit, DoCheck, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-b1x',
  templateUrl: './b1x.component.html',
  styleUrls: ['./b1x.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class B1xComponent implements OnInit, DoCheck {

  constructor() { }

  ngOnInit() {
  }

  ngDoCheck() {
    console.log("checking inputs of B1x");
  }

  checkingExpressions() {
    console.log("checking expressions of B1x")
    return '';
  }
}
