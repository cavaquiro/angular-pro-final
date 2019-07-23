import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-meal-form',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './meal-form.component.html',
  styleUrls: ['./meal-form.component.scss']
})
export class MealFormComponent implements OnInit {
  form: FormGroup;
  constructor() { }

  ngOnInit() {
  }

}
