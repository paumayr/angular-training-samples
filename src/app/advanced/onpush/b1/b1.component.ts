import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-b1',
  templateUrl: './b1.component.html',
  styleUrls: ['./b1.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class B1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ngDoCheck() {
    console.log("checking inputs of B1");
  }

  checkingExpressions() {
    console.log("checking expressions of B1")
    return '';
  }

  @Input() person: Person;
}
