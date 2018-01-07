import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DisplayingDataComponent } from './displaying-data/displaying-data.component';
import { RouterModule, Route } from '@angular/router';
import { ButtonClickComponent } from './button-click/button-click.component';
import { ShowIfComponent } from './show-if/show-if.component';
import { RepeatingElementsComponent } from './repeating-elements/repeating-elements.component';
import { TextInputComponent } from './text-input/text-input.component';
import { ModelBindingComponent } from './model-binding/model-binding.component';
import { FruitBasketComponent } from './fruit-basket/fruit-basket.component';
import { InputBindingModule } from './input-binding/input-binding.module';

const basicRoutes : Route[] = [
  {
    path: 'basics',
    children: [
      { path: 'displayingdata', component: DisplayingDataComponent },
      { path: 'buttonclick', component: ButtonClickComponent },
      { path: 'showif', component: ShowIfComponent },
      { path: 'repeatingelements', component: RepeatingElementsComponent },
      { path: 'textinput', component: TextInputComponent },
      { path: 'modelbinding', component: ModelBindingComponent },
      { path: 'fruitbasket', component: FruitBasketComponent }
    ]
  }
];

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    InputBindingModule,
    RouterModule.forChild(basicRoutes)
  ],
  declarations: [DisplayingDataComponent, ButtonClickComponent, ShowIfComponent, RepeatingElementsComponent, TextInputComponent, ModelBindingComponent, FruitBasketComponent]
})
export class BasicsModule { }
