import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DonsComponent } from './pages/dons/dons.component';

const AuthModule = () =>
  import("./pages/auth/auth.module").then((m) => m.AuthModule);

const HomeModule = () =>
  import("./pages/home/home.module").then((m) => m.HomeModule);

const QuizModule = () =>
  import("./pages/quiz/quiz.module").then((m) => m.QuizModule);

const ArticlesModule = () =>
  import("./pages/articles/articles.module").then((m) => m.ArticlesModule);

const GlossaryModule = () =>
  import("./pages/glossary/glossary.module").then((m) => m.GlossaryModule);

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
      {
        path: "home",
        loadChildren: HomeModule,
      },
  {
    path: "auth",
    loadChildren: AuthModule,
  },
  {
    path: "quiz",
    loadChildren: QuizModule,
  },
  {
    path: "dons",
    component: DonsComponent
  },
  {
    path: "articles",
    loadChildren: ArticlesModule,
  },
  {
    path: "glossary",
    loadChildren: GlossaryModule,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
