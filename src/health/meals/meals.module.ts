import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MealsComponent } from './containers/meals/meals.component';
import { MealComponent } from './containers/meal/meal.component';

import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes} from "@angular/router";
import { SharedModule } from "../shared/shared.module";
import { SharedModule as GeneralSharedModule } from "../../shared/shared.module";
import { MealFormComponent } from './components/meal-form/meal-form.component';


export const ROUTES: Routes = [
  { path: '', component: MealsComponent },
  { path: 'new', component: MealComponent }
];

@NgModule({
  declarations: [MealsComponent, MealComponent, MealFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(ROUTES),
    SharedModule,
    GeneralSharedModule
  ]
})
export class MealsModule { }
