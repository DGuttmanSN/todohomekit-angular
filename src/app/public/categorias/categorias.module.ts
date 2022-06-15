import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriasRoutingModule } from './categorias-routing.module';
import { SharedModule } from 'src/app/core/shared/shared.module';
import { CategoriasComponent } from './categorias.component';
import { LamparasComponent } from './components/lamparas/lamparas.component';
import { AplicacionesComponent } from './components/aplicaciones/aplicaciones.component';
import { BombillasComponent } from './components/bombillas/bombillas.component';
import { TimbresComponent } from './components/timbres/timbres.component';
import { EnchufesComponent } from './components/enchufes/enchufes.component';
import { DomoticaComponent } from './components/domotica/domotica.component';
import { NoticiasComponent } from './components/noticias/noticias.component';
import { SmarttvComponent } from './components/smarttv/smarttv.component';

export * from 'src/app/core/shared/shared.module';


@NgModule({
  declarations: [CategoriasComponent, AplicacionesComponent, BombillasComponent, TimbresComponent, EnchufesComponent, DomoticaComponent, NoticiasComponent, SmarttvComponent],
  imports: [
    CommonModule,
    SharedModule,
    CategoriasRoutingModule
  ]
})
export class CategoriasModule { }
