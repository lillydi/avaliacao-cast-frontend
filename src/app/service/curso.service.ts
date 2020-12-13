import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Curso } from '../model/curso';
import { Observable } from 'rxjs';

@Injectable()
export class CursoService {

  private cursosUrl: string;

  constructor(private http: HttpClient) {
    this.cursosUrl = 'http://localhost:9000/cursos';
  }

  public findAll(): Observable<Curso[]> {
    return this.http.get<Curso[]>(this.cursosUrl);
  }

  public save(curso: Curso) {
    return this.http.post<Curso>(this.cursosUrl, curso);
  }
}