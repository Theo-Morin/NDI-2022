import { Component, OnInit } from '@angular/core';
import { ButtonSize, ButtonType } from 'src/app/components/button/button.component';

@Component({
  selector: 'app-quiz-content',
  templateUrl: './quiz-content.component.html',
  styleUrls: ['./quiz-content.component.scss']
})
export class QuizContentComponent implements OnInit {
  buttonSize = ButtonSize;
  finish: boolean = false;
  progress: number = 20;
  responding: boolean = false;
  buttonType = ButtonType;
  constructor() { }

  ngOnInit(): void {
  }

}
