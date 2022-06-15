import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/core/shared/shared.module';
import { CategoriasComponent } from './categorias.component';
import { AplicacionesComponent } from './components/aplicaciones/aplicaciones.component';
import { BombillasComponent } from './components/bombillas/bombillas.component';
import { DomoticaComponent } from './components/domotica/domotica.component';
import { EnchufesComponent } from './components/enchufes/enchufes.component';
import { LamparasModule } from './components/lamparas/lamparas.module';
import { NoticiasComponent } from './components/noticias/noticias.component';
import { SmarttvComponent } from './components/smarttv/smarttv.component';
import { TimbresComponent } from './components/timbres/timbres.component';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component:CategoriasComponent },
  { path: 'lamparas', loadChildren: () => import('./components/lamparas/lamparas.module').then(m => m.LamparasModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, SharedModule]
})
export class CategoriasRoutingModule { }
