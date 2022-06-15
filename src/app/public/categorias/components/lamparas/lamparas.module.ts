import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LamparasRoutingModule } from './lamparas-routing.module';
import { LamparasComponent } from './lamparas.component';
import { SharedModule } from '../../categorias.module';
import { RouterModule } from '@angular/router';
import { LamparasCardBoxComponent } from './card-box/lamparas-card-box.component';


@NgModule({
  declarations: [LamparasComponent, LamparasCardBoxComponent],
  imports: [
    SharedModule,
    CommonModule,
    RouterModule,
    CommonModule,
    LamparasRoutingModule
  ]
})
export class LamparasModule { }
