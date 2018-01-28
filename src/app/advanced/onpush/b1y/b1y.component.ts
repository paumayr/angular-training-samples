import { Component, OnInit, DoCheck, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-b1y',
  templateUrl: './b1y.component.html',
  styleUrls: ['./b1y.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class B1yComponent implements OnInit, DoCheck {

  constructor() { }

  ngOnInit() {
  }

  ngDoCheck() {
    console.log("checking inputs of B1y");
  }

  checkingExpressions() {
    console.log("checking expressions of B1y")
    return '';
  }
}
