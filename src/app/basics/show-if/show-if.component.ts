import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-if',
  templateUrl: './show-if.component.html',
  styleUrls: ['./show-if.component.css']
})
export class ShowIfComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  value = 42;
  increment() {
      this.value++;
  }
}
