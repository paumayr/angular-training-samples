import { Component, OnInit, DoCheck, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainComponent implements OnInit, DoCheck {

  constructor() { }

  ngOnInit() {
  }

  ngDoCheck() {
    console.log("checking inputs of main");
  }

  checkingExpressions() {
    console.log("checking expressions of Main")
    return '';
  }
}
