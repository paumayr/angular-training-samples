import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-b2',
  templateUrl: './b2.component.html'
})
export class B2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ngDoCheck() {
    console.log("checking inputs of B2");
  }

  checkingExpression() {
    console.log('checking expressions of B2');
    return '';
  }
}
