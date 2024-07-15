import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { CursoListComponent } from './components/cursos/curso-list/curso-list.component';
import { NivelListComponent } from './components/niveles/nivel-list/nivel-list.component';
import { LeccionDetailComponent } from './components/lecciones/leccion-detail/leccion-detail.component';
import { JuegoPlayComponent } from './components/juegos/juego-play/juego-play.component';


@NgModule({
  declarations: [
    CursoListComponent,
    NivelListComponent,
    LeccionDetailComponent,
    JuegoPlayComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
