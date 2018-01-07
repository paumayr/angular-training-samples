import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-click',
  templateUrl: './button-click.component.html',
  styleUrls: ['./button-click.component.css']
})
export class ButtonClickComponent implements OnInit {

  value = 42;

  constructor() { }

  ngOnInit() {
  }

  increment() {
      console.log("in increment");
      this.value++;
  }
}
