import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

interface FirstLastName {
  first: string, last: string
}

@Component({
  selector: 'app-name-editor',
  templateUrl: './name-editor.component.html',
  styleUrls: ['./name-editor.component.css']
})
export class NameEditorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() first: string = '';
  @Input() last: string = '';

  @Output() public onSave = new EventEmitter<FirstLastName>();

  save() {
    this.onSave.emit({ first: this.first, last: this.last});
  }
}
