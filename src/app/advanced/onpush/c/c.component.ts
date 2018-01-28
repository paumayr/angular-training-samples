import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-c',
  templateUrl: './c.component.html',
  styleUrls: ['./c.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ngDoCheck() {
    console.log("checking inputs of C");
  }

  checkingExpressions() {
    console.log("checking expressions of C")
    return '';
  }
}
