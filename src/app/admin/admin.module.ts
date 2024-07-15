import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AddCursoComponent } from './components/curso/add-curso/add-curso.component';
import { EditCursoComponent } from './components/curso/edit-curso/edit-curso.component';
import { AddNivelComponent } from './components/niveles/add-nivel/add-nivel.component';
import { EditNivelComponent } from './components/niveles/edit-nivel/edit-nivel.component';
import { AddLeccionComponent } from './components/lecciones/add-leccion/add-leccion.component';
import { EditLeccionComponent } from './components/lecciones/edit-leccion/edit-leccion.component';
import { AddJuegoComponent } from './components/juegos/add-juego/add-juego.component';
import { EditJuegoComponent } from './components/juegos/edit-juego/edit-juego.component';


@NgModule({
  declarations: [
    AddCursoComponent,
    EditCursoComponent,
    AddNivelComponent,
    EditNivelComponent,
    AddLeccionComponent,
    EditLeccionComponent,
    AddJuegoComponent,
    EditJuegoComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
