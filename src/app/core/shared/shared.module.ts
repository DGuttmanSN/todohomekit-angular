import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'
import { HttpClientModule } from "@angular/common/http";
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { ArticlesService } from '../service/articles.service';
import { ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../service/user.service';

@NgModule({
  declarations: [
    NavBarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  exports: [
    NavBarComponent
  ],
  providers: [
    ArticlesService,
    UserService
  ]
})
export class SharedModule {
  constructor() {
  }
}
