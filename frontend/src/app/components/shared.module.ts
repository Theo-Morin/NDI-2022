import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { ButtonComponent } from './button/button.component';
import { DisclaimerComponent } from './disclaimer/disclaimer.component';
import { DropdownComponent } from './dropdown/dropdown.component';



@NgModule({
  declarations: [
    InputComponent,
    ButtonComponent,
    DisclaimerComponent,
    DropdownComponent
  ],
  exports: [
    InputComponent,
    ButtonComponent,
    DisclaimerComponent,
    DropdownComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
