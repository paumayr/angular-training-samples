import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html'
})
export class C1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ngDoCheck() {
    console.log("checking inputs of C1");
  }

  checkingExpression() {
    console.log('checking expressions of C1');
    return '';
  }
}
