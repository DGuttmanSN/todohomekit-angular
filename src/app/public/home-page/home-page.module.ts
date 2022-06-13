import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from 'src/app/core/shared/shared.module';
import { CardBoxComponent } from './component/card-box/card-box.component';


@NgModule({
  declarations: [
    HomePageComponent,
    CardBoxComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})

export class HomePageModule {
  constructor() {}
}
