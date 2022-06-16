import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'src/app/core/model/Article';
import { Comentario } from 'src/app/core/model/Comentario';
import { PostComentario } from 'src/app/core/model/PostComentario';
import { ArticlesService } from 'src/app/core/service/articles.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ArticleComponent implements OnInit {

  article:Article;
  commentsList = <Comentario[]>[];

  comentario:string;
  usuario:string;

  logueado:boolean;

  idArticulo:number;


  constructor(private activatedRoute:ActivatedRoute, private articleService:ArticlesService) { }

  ngOnInit(): void {
    if(localStorage.getItem("auth")){
      this.logueado = true;
    } else {
      this.logueado = false;
    }
    this.activatedRoute.params.subscribe((id) => {
      this.idArticulo = id['id'];
      this.articleService.articleRequest(id['id']).subscribe( (article)=> {
        
        this.article = article;
      })
    });
    this.activatedRoute.params.subscribe((id) => {
      this.articleService.articleComents(id['id']).subscribe( (comments)=> {
        this.commentsList = comments;
      })
    });
  }

comentar(){
  if(localStorage.getItem("auth")){
    this.articleService.comentar(this.comentario, this.usuario, this.idArticulo).subscribe(((response) => {
      location.reload();
    }));
  } else {
    console.log("Debes entrar con tu cuenta para poder realizar esta acción")
  }
}

}
