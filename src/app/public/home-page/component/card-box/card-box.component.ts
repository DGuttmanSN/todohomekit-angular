import { Component, OnDestroy, OnInit } from '@angular/core';
import { ArticlesService } from 'src/app/core/service/articles.service';
import { Card } from '../../../../core/model/Card';

@Component({
  selector: 'app-card-box',
  templateUrl: './card-box.component.html',
  styleUrls: ['./card-box.component.scss']
})
export class CardBoxComponent implements OnInit, OnDestroy {

  cardList = <Card[]>[];
  cardsLength:number;
  listedCards = <Card[]>[];
  firstCard:number = 0;
  lastCard:number = 4;

  constructor(private articlesService:ArticlesService) { }

  ngOnInit(): void {
    this.articlesService.cardRequest().subscribe(
      (cards) => {
        this.cardList = cards;
        this.cardsLength = this.cardList.length;
        for(let i = this.firstCard; i < this.lastCard; i++){
          if(i < this.cardsLength){
            this.listedCards.push(this.cardList[i]);
          } else {
            break;
          }
        }
      },
      (error) => {
        console.log(error)
      }
    )
  }

  ngOnDestroy(): void {
    this.cardList = [];
    this.listedCards = [];
    this.firstCard = 0;
    this.lastCard = 4;
  }

  nextpage(){
    this.listedCards = [];
    this.firstCard = this.firstCard + 5;
    this.lastCard = this.lastCard + 5;
    for(let i = this.firstCard; i < this.lastCard; i++){
      if(i < this.cardsLength){
        this.listedCards.push(this.cardList[i]);
      } else {
        break;
      }
    }
  }
  
}
