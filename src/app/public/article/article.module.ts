import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticleRoutingModule } from './article-routing.module';
import { ArticleComponent } from './article.component';
import { SharedModule } from 'src/app/core/shared/shared.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ArticleComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ArticleRoutingModule
  ]
})
export class ArticleModule { }
