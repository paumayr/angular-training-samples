import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html'
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ngDoCheck() {
    console.log("checking inputs of Main");
  }
  
  checkingExpression() {
    console.log('checking expressions of Main');
    return '';
  }

  someClick() {
    // here to trigger Change Detection.
  }
}
