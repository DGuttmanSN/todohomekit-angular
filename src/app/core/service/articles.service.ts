import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Article } from '../model/Article';
import { Card } from '../model/Card';
import { Comentario } from '../model/Comentario';
import { PostComentario } from '../model/PostComentario';
import { Tags } from '../model/Tags';

@Injectable({
  providedIn: 'any'
})
export class ArticlesService {

  constructor(private http:HttpClient) {}

  cardRequest(){
    return this.http.get<Card[]>("http://localhost:8080/home");
  }
  tagCardRequest(tag:Tags){
    let body = {
      "tag":tag
    }
    return this.http.post<Card[]>("http://localhost:8080/category",body)
  }

  articleRequest(id:number){
    return this.http.get<Article>("http://localhost:8080/article/"+id);
  }

  articleComents(id:number){
    return this.http.get<Comentario[]>("http://localhost:8080/get/comments/"+id);
  }

  comentar(comentario:string, usuario:string, idArticulo:number){
    let body = {
      "comentario":comentario,
      "usuario":usuario,
      "idArticulo":idArticulo
    }
    return this.http.post<String>("http://localhost:8080/post/comment", body);
  }

}
