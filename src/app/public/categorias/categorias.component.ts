import { Component, OnInit } from '@angular/core';
import { Tags } from 'src/app/core/model/Tags';
import { ArticlesService } from 'src/app/core/service/articles.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss']
})
export class CategoriasComponent implements OnInit {

  public tags:Tags;

  constructor(private articulosService:ArticlesService) {}

  ngOnInit(): void {
  }

}
