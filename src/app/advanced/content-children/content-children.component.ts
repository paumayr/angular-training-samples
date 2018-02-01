import { Component, OnInit } from '@angular/core';
import { ContentChildren } from '@angular/core/src/metadata/di';

@Component({
  selector: 'app-content-children',
  templateUrl: './content-children.component.html',
  styleUrls: ['./content-children.component.css']
})
export class ContentChildrenComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
