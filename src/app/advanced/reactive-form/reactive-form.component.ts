import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validators, FormGroup } from '@angular/forms';

export interface FirstLastEmail {
  firstname: string;
  lastname: string;
  email: string;
}

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  formGroup : FormGroup;
  createForm() {
    this.formGroup = this.fb.group({
        firstname: ['', Validators.required],
        lastname: ['', Validators.required],
        email: ['', [Validators.required, Validators.pattern("[a-zA-Z0-9]+@mycompany\.com")]]
      });
  }

  get firstname() {
    return this.formGroup.get('lastname');
  }

  get lastname() {
    return this.formGroup.get('lastname');
  }

  get email() {
    return this.formGroup.get('email');
  }

  saveForm(value: any) {
    console.log(value);
  }
}
