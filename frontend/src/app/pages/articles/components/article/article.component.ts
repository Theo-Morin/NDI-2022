import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  @Input() title: string;
  @Input() content: string;
  @Input() author: string;
  @Input() date: string;

  constructor() { }

  ngOnInit(): void {
  }

}
