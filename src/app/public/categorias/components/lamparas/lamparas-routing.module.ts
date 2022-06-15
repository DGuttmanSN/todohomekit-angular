import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LamparasComponent } from './lamparas.component';

const routes: Routes = [
  {path:"", component: LamparasComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LamparasRoutingModule { }
