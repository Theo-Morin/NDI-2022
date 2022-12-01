import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/components/shared.module';
import { QuizComponent } from './quiz.component';
import { QuizRoutingModule } from './quiz-routing.module';
import { QuizContentComponent } from './quiz-content/quiz-content.component';



@NgModule({
  declarations: [
    QuizComponent,
    QuizContentComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    QuizRoutingModule
  ]
})
export class QuizModule { }
