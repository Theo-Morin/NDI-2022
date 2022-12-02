import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonSize } from 'src/app/components/button/button.component';
import { QuizService } from 'src/app/core/services/quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {
  buttonSize = ButtonSize;
  quiz: any = [];

  constructor(
    private quizService: QuizService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.quizService.getList().subscribe((quizList) => {
      this.quiz = quizList;
    });
  }

  goToQuiz(quiz: any) {
    this.quizService.activeQuiz$.next(quiz);
    this.router.navigateByUrl('/quiz/' + quiz.id);
  }

}
