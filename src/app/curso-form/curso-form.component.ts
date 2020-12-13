import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CursoService } from '../service/curso.service';
import { Curso } from '../model/curso';
import { FormBuilder, 
         FormGroup,
         FormArray, 
         FormControl, 
         ValidatorFn
        } from '@angular/forms';
import { ConditionalExpr } from '@angular/compiler';
import { Categoria } from '../model/categoria';
import { CategoriaService } from '../service/categoria.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-curso-form',
  templateUrl: './curso-form.component.html',
  styleUrls: ['./curso-form.component.css']
})
export class CursoFormComponent {

  curso: Curso;
  error: HttpErrorResponse;
  form: FormGroup;
  categorias! : Categoria[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cursoService: CursoService,
    private categoriaService: CategoriaService,
    private formBuilder: FormBuilder) {

    this.curso = new Curso();
    this.error = new HttpErrorResponse({});
        this.form = this.formBuilder.group({
      categorias: ['']
    });

    this.categoriaService.findAll().subscribe(data => {
      this.categorias = data;
    });
  }


  onSubmit() {
    this.cursoService.save(this.curso).subscribe((result) =>{
      this.gotoCursoList()
    },
    (error) => {                              //Error callback
      console.error(error)
      this.error = error;
      
    });
    
  }

  gotoCursoList() {
    this.router.navigate(['/cursos']);
  }
}