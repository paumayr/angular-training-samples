import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  templateUrl: './class-binding.component.html',
  styleUrls: ['./class-binding.component.css']
})
export class ClassBindingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  directClasses = "even";
  toggleDirectClasses() {
    this.directClasses = this.directClasses == "even" ? "odd" : "even";
  }

  value = 0;
  increment() {
    this.value++;
  }
}
