import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Article } from '../model/Article';
import { Card } from '../model/Card';
import { Comentario } from '../model/Comentario';
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
    return this.http.get<Comentario[]>("http://localhost:8080/article/comentarios"+id);
  }

}
