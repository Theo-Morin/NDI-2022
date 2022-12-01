import { Component, OnInit } from '@angular/core';
import { ButtonSize } from 'src/app/components/button/button.component';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {
  buttonSize = ButtonSize;
  constructor() { }

  ngOnInit(): void {
  }

}
