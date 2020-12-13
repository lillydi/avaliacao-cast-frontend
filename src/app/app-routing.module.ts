import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CursoListComponent } from './curso-list/curso-list.component';
import { CursoFormComponent } from './curso-form/curso-form.component';

const routes: Routes = [
  { path: 'cursos', component: CursoListComponent },
  { path: 'addcurso', component: CursoFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }