import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OutputBindingsComponent } from './output-bindings/output-bindings.component';
import { NameEditorComponent } from './name-editor/name-editor.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [OutputBindingsComponent, NameEditorComponent]
})
export class OutputBindingModule { }
