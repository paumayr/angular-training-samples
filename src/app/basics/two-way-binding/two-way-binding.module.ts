import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TwoWayBindingsComponent } from './two-way-bindings/two-way-bindings.component';
import { MyCustomComponent } from './my-custom/my-custom.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TwoWayBindingsComponent, MyCustomComponent]
})
export class TwoWayBindingModule { }
