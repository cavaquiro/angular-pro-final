import {Component, OnDestroy, OnInit} from '@angular/core';
import {Meal, MealsService} from "../../../shared/services/meals.service";
import {Observable, Subscription} from "rxjs";
import {Store} from "store";

@Component({
  selector: 'app-meals',
  templateUrl: './meals.component.html',
  styleUrls: ['./meals.component.scss']
})
export class MealsComponent implements OnInit, OnDestroy {

  meals$: Observable<Meal[]>;
  subscription: Subscription;

  constructor(
      private store: Store,
      private mealService: MealsService) { }

  ngOnInit() {
    this.meals$ = this.store.select<Meal[]>('meals');
    this.subscription = this.mealService.meals$.subscribe();
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
