import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Card } from '../model/Card';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor(private http:HttpClient) { }

  cardRequest(){
    return this.http.get<Card[]>("http://localhost:8080/home");
  }

}
