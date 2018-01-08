import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-bindings',
  templateUrl: './style-bindings.component.html',
  styleUrls: ['./style-bindings.component.css']
})
export class StyleBindingsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  fontSize = 12;
  width = 50;
  height = 50;

  increaseFont() {
      this.fontSize += 2;
  }

  decreaseFont() {
      this.fontSize -= 2;
  }

  increaseWidth() {
      this.width += 10;
  }

  decreaseWidth() {
      this.width -= 10;
  }

  increaseHeight() {
      this.height += 10;
  }

  decreaseHeight() {
      this.height -= 10;
  }
}
