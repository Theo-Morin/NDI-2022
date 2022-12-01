import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { QuizContentComponent } from "./quiz-content/quiz-content.component";
import { QuizComponent } from "./quiz.component";

const routes: Routes = [
  {
    path: "",
    component: QuizComponent,
  },
  {
    path: ":id",
    component: QuizContentComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuizRoutingModule {}
