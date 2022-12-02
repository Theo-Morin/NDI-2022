import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ButtonSize, ButtonType } from 'src/app/components/button/button.component';
import { QuizService } from 'src/app/core/services/quiz.service';

@Component({
  selector: 'app-quiz-content',
  templateUrl: './quiz-content.component.html',
  styleUrls: ['./quiz-content.component.scss']
})
export class QuizContentComponent implements OnInit {
  buttonSize = ButtonSize;
  finish: boolean = false;
  progress: number = 0;
  responding: boolean = false;
  buttonType = ButtonType;
  quizId: number;
  quizType: any;
  quiz: any;
  answersResponded = 0;
  selectedAnswer: any;
  actualAnswer: {
    answers: Array<{
      content: string,
      explanation: any,
      pos: string,
      quizId: string,
      title: string,
      isRight: string
    }>,
    content: string,
    explanation: any,
    pos: string,
    quizId: string,
    title: string
  };
  constructor(
    private activedRoute: ActivatedRoute,
    private quizService: QuizService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.quizId = this.activedRoute.snapshot.params['id'];
    this.quizService.activeQuiz$.subscribe((quizT) => {
      if(quizT == null) {
        this.router.navigateByUrl('/quiz');
      }
      this.quizType = quizT;
      this.quizService.get(quizT.name).subscribe((quiz) => {
        console.log("t", quiz.questions);
        this.quiz = quiz.questions;
        this.actualAnswer = this.quiz[0];
        this.actualAnswer.answers = this.quiz[0].answers;
      });
    });
  }

  clickOnReponse(answer: any) {
    this.selectedAnswer = answer;
    this.responding = true;
    this.answersResponded++;
    this.progress = this.answersResponded * 100 / this.quizType.questionCount < 100 ? this.answersResponded * 100 / this.quizType.questionCount : 100;
  }

  goToNextQuestion() {
    if(this.answersResponded < this.quizType.questionCount) {
      this.actualAnswer = this.quiz[this.answersResponded];
      this.responding = false;
    }
    else {
      this.finish = true;
    }
  }

  goToVideo() {
    window.location.replace('https://www.youtube.com/watch?v=q_ZSqF-WFP0&feature=youtu.be');
  }
}
