import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentProjectionComponent } from './content-projection.component';
import { QuoteComponent } from './quote/quote.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ContentProjectionComponent,
    QuoteComponent
  ]
})
export class ContentProjectionModule { }
