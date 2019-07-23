import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MealsComponent } from './containers/meals/meals.component';
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes} from "@angular/router";
import { SharedModule } from "../shared/shared.module";
import { SharedModule as GeneralSharedModule } from "../../shared/shared.module";


export const ROUTES: Routes = [
  { path: '', component: MealsComponent }
];

@NgModule({
  declarations: [MealsComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(ROUTES),
    SharedModule,
    GeneralSharedModule
  ]
})
export class MealsModule { }