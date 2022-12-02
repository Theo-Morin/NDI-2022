import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/components/shared.module';
import { ArticlesComponent } from './articles.component';
import { ArticlesRoutingModule } from './articles-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ArticleComponent } from "./components/article/article.component";


@NgModule({
  declarations: [
    ArticlesComponent,
    ArticleComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ArticlesRoutingModule,
    HttpClientModule
  ]
})
export class ArticlesModule { }
