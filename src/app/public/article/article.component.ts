import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'src/app/core/model/Article';
import { ArticlesService } from 'src/app/core/service/articles.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ArticleComponent implements OnInit {

  article:Article;

  constructor(private activatedRoute:ActivatedRoute, private articleService:ArticlesService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((id) => {
      this.articleService.articleRequest(id['id']).subscribe( (article)=> {
        this.article = article;
      })
    });
  }

}
