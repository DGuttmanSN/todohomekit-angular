import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'
import {HttpClientModule} from "@angular/common/http";
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { ArticlesService } from '../service/articles.service';

@NgModule({
  declarations: [
    NavBarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule
  ],
  exports: [
    NavBarComponent
  ],
  providers: [
    ArticlesService
  ]
})
export class SharedModule {
  constructor() {
  }
}
