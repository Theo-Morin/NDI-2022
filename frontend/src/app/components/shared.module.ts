import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink} from "@angular/router";
import { InputComponent } from './input/input.component';
import { ButtonComponent } from './button/button.component';
import { DisclaimerComponent } from './disclaimer/disclaimer.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { TopbarComponent } from './topbar/topbar.component';
import { TextareaComponent } from './textarea/textarea.component';



@NgModule({
  declarations: [
    InputComponent,
    ButtonComponent,
    DisclaimerComponent,
    DropdownComponent,
    ProgressBarComponent,
    TopbarComponent,
    TextareaComponent,
  ],
  exports: [
    InputComponent,
    ButtonComponent,
    DisclaimerComponent,
    DropdownComponent,
    ProgressBarComponent,
    TopbarComponent,
    TextareaComponent,
  ],
  imports: [
    CommonModule,
    RouterLink
  ]
})
export class SharedModule { }
