import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { AuthComponent } from './auth.component';
import { SharedModule } from 'src/app/components/shared.module';



@NgModule({
  declarations: [
    SignInComponent,
    SignUpComponent,
    AuthComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class AuthModule { }
