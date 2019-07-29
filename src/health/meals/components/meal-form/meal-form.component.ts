import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { FormArray, FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Meal } from '../../../shared/services/meals.service'
@Component({

  selector: 'app-meal-form',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './meal-form.component.html',
  styleUrls: ['./meal-form.component.scss']
})
export class MealFormComponent implements OnInit {
  @Output()
  create = new EventEmitter<Meal>();
  form= this.fb.group({
    name: ['', Validators.required],
    ingredients: this.fb.array([''])
  });
  constructor(private fb: FormBuilder) { }
  get ingredients(){
    return this.form.get('ingredients') as FormArray;
  }

  get required(){
    return (this.form.get('name').hasError('required') &&
            this.form.get('name').touched);
  }
  ngOnInit() {
  }

  addIngrident(){
    this.ingredients.push(new FormControl(''));
  }
  removeIngrident(index: number){
    this.ingredients.removeAt(index);
  }

  createMeal(){
    if(this.form.valid){
      this.create.emit(this.form.value);
    }    
  }
}
