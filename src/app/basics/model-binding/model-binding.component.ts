import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-model-binding',
  templateUrl: './model-binding.component.html',
  styleUrls: ['./model-binding.component.css']
})
export class ModelBindingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  message = '';

  showAlert() {
      alert(`You wrote: ${this.message}`);
  }
}
