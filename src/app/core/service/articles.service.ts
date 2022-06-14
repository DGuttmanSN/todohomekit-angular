import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Article } from '../model/Article';
import { Card } from '../model/Card';

@Injectable({
  providedIn: 'any'
})
export class ArticlesService {

  constructor(private http:HttpClient) { }

  cardRequest(){
    return this.http.get<Card[]>("http://localhost:8080/home");
  }

  articleRequest(id:number){
    return this.http.get<Article>("http://localhost:8080/article/"+id);
  }

}
