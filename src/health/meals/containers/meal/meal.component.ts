import { Component, OnInit } from '@angular/core';
import { Meal } from 'src/health/shared/services/meals.service';

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.scss']
})
export class MealComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  addMeal(event:Meal){
    console.log('meal',event)
  }

}
