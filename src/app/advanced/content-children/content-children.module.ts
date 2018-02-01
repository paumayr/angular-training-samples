import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentChildrenComponent } from './content-children.component';
import { MenuComponent } from './menu/menu.component';
import { LinkDirective } from './link.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ContentChildrenComponent, MenuComponent, LinkDirective]
})
export class ContentChildrenModule { }
