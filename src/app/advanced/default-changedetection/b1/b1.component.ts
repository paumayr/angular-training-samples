import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-b1',
  templateUrl: './b1.component.html'
})
export class B1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ngDoCheck() {
    console.log("checking inputs of B1");
  }

  checkingExpression() {
    console.log('checking expressions of B1');
    return '';
  }

  @Input() person: Person;
}
