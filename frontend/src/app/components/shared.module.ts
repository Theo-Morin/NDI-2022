import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { ButtonComponent } from './button/button.component';
import { DisclaimerComponent } from './disclaimer/disclaimer.component';


@NgModule({
  declarations: [
    InputComponent,
    ButtonComponent,
    DisclaimerComponent,
  ],
  exports: [
    InputComponent,
    ButtonComponent,
    DisclaimerComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
