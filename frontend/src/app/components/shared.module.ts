import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { ButtonComponent } from './button/button.component';
import { DisclaimerComponent } from './disclaimer/disclaimer.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';



@NgModule({
  declarations: [
    InputComponent,
    ButtonComponent,
    DisclaimerComponent,
    DropdownComponent,
    ProgressBarComponent
  ],
  exports: [
    InputComponent,
    ButtonComponent,
    DisclaimerComponent,
    DropdownComponent,
    ProgressBarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
