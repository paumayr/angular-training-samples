import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';
import { CComponent } from './c/c.component';
import { B1Component } from './b1/b1.component';
import { B2Component } from './b2/b2.component';
import { C1Component } from './c1/c1.component';
import { DefaultChangedetectionComponent } from './default-changedetection.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MainComponent, AComponent, BComponent, CComponent, B1Component, B2Component, C1Component, DefaultChangedetectionComponent]
})
export class DefaultChangedetectionModule { }
