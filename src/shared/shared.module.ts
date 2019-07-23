import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconDefinitionComponent } from './components/icon-definition/icon-definition.component';
import { IconComponent } from './components/icon/icon.component';

@NgModule({
  declarations: [IconDefinitionComponent, IconComponent],
  exports: [
    IconDefinitionComponent,
    IconComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
