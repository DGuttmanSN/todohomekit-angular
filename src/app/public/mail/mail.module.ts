import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MailRoutingModule } from './mail-routing.module';
import { SharedModule } from '../categorias/categorias.module';
import { FormsModule } from '@angular/forms';
import { MailComponent } from './mail.component';


@NgModule({
  declarations: [MailComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    MailRoutingModule
  ]
})
export class MailModule { }
