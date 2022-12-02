import { Component, OnInit } from '@angular/core';
import { ArticleService } from "../../core/services/article.service";

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {

  articles = []

  constructor(private articleService: ArticleService) { }

  ngOnInit(): void {
    this.articleService.get().subscribe((articles) => {
      this.articles = articles
    })
  }
}
