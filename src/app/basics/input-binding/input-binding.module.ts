import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailComponent } from './detail/detail.component';
import { MasterComponent } from './master/master.component';
import { InputBindingsComponent } from './input-bindings/input-bindings.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DetailComponent, MasterComponent, InputBindingsComponent]
})
export class InputBindingModule { }
