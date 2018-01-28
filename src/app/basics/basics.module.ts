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
import { InputBindingsComponent } from './input-binding/input-bindings/input-bindings.component';
import { OutputBindingModule } from './output-binding/output-binding.module';
import { OutputBindingsComponent } from './output-binding/output-bindings/output-bindings.component';
import { TwoWayBindingsComponent } from './two-way-binding/two-way-bindings/two-way-bindings.component';
import { TwoWayBindingModule } from './two-way-binding/two-way-binding.module';
import { LifeCycleEventsModule } from './life-cycle-events/life-cycle-events.module';
import { LifeCycleEventsComponent } from './life-cycle-events/life-cycle-events/life-cycle-events.component';
import { StyleBindingsComponent } from './style-bindings/style-bindings.component';
import { ClassBindingComponent } from './class-binding/class-binding.component';
import { SwitchingComponent } from './switching/switching.component';
import { PipesComponent } from './pipes/pipes.component';
import { RoutingBasicsComponent } from './routing-basics/routing-basics/routing-basics.component';
import { RoutingBasicsModule } from './routing-basics/routing-basics.module';
import { RouterLinkActiveModule } from './router-link-active/router-link-active.module';
import { RouteParametersModule } from './route-parameters/route-parameters.module';

const basicRoutes : Route[] = [
    { path: 'displayingdata', component: DisplayingDataComponent },
    { path: 'buttonclick', component: ButtonClickComponent },
    { path: 'showif', component: ShowIfComponent },
    { path: 'repeatingelements', component: RepeatingElementsComponent },
    { path: 'textinput', component: TextInputComponent },
    { path: 'modelbinding', component: ModelBindingComponent },
    { path: 'fruitbasket', component: FruitBasketComponent },

    { path: 'inputbindings', component: InputBindingsComponent },
    { path: 'outputbindings', component: OutputBindingsComponent },
    { path: 'twowaybindings', component: TwoWayBindingsComponent },
    { path: 'lifecycleevents', component: LifeCycleEventsComponent },
    { path: 'stylebindings', component: StyleBindingsComponent },
    { path: 'classbinding', component: ClassBindingComponent },
    { path: 'switching', component: SwitchingComponent },
    { path: 'pipes', component: PipesComponent }
];

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    InputBindingModule,
    OutputBindingModule,
    TwoWayBindingModule,
    LifeCycleEventsModule,
    RoutingBasicsModule,
    RouterLinkActiveModule,
    RouteParametersModule,
    RouterModule.forChild(basicRoutes)
  ],
  declarations: [DisplayingDataComponent, ButtonClickComponent, ShowIfComponent, RepeatingElementsComponent, TextInputComponent, ModelBindingComponent, FruitBasketComponent, StyleBindingsComponent, ClassBindingComponent, SwitchingComponent, PipesComponent]
})
export class BasicsModule { }
