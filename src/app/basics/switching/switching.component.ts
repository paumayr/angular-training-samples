import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switching',
  templateUrl: './switching.component.html',
  styleUrls: ['./switching.component.css']
})
export class SwitchingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  pages = ["intro", "chapter1", "chapter2", "closing"];
  currentPage: string = this.pages[0];

  nextPage() {
    var index = this.pages.indexOf(this.currentPage);
    index = (index + 1) % this.pages.length;
    this.currentPage = this.pages[index];
  }

  prevPage() {
    var index = this.pages.indexOf(this.currentPage);
    index = index - 1;
    if (index < 0)
        index = this.pages.length - 1;

    this.currentPage = this.pages[index];
  }
}
