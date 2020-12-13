import { Component, OnInit } from '@angular/core';
import { Curso } from '../model/curso';
import { CursoService } from '../service/curso.service';

@Component({
  selector: 'app-curso-list',
  templateUrl: './curso-list.component.html',
  styleUrls: ['./curso-list.component.css']
})
export class CursoListComponent implements OnInit {

  cursos!: Curso[];

  constructor(private cursoService: CursoService) {
  }

  ngOnInit() {
    this.cursoService.findAll().subscribe(data => {
      this.cursos = data;
    });
  }
}