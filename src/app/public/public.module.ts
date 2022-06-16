import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicComponent } from './public.component';
import { PublicRoutingModule } from './public-routing.module';
import { CategoriasComponent } from './categorias/categorias.component';
import { SharedModule } from './categorias/categorias.module';
import { NavBarComponent } from '../core/shared/component/nav-bar/nav-bar.component';
import { MailComponent } from './mail/mail.component';



@NgModule({
  declarations: [
    PublicComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    PublicRoutingModule
  ]
})
export class PublicModule { }
