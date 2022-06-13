import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { OlderArticlesComponent } from './older-articles/older-articles.component';
import { PublicComponent } from './public.component';
import { PublicRoutingModule } from './public-routing.module';



@NgModule({
  declarations: [
    PublicComponent,
    OlderArticlesComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule
  ]
})
export class PublicModule { }
