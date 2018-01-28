import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-b2',
  templateUrl: './b2.component.html',
  styleUrls: ['./b2.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class B2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ngDoCheck() {
    console.log("checking inputs of B2");
  }

  checkingExpressions() {
    console.log("checking expressions of B2")
    return '';
  }
}
