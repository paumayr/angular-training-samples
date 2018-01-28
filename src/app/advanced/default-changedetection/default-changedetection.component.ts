import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default-changedetection',
  templateUrl: './default-changedetection.component.html',
  styleUrls: ['./default-changedetection.component.css']
})
export class DefaultChangedetectionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  clickOutsideOfMain() {
    // here to trigger change detection
  }
}
