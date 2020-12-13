import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from '../model/categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private categoriasUrl: string;

  constructor(private http: HttpClient) {
    this.categoriasUrl = 'http://localhost:9000/categorias';
  }

  public findAll(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(this.categoriasUrl);
  }

}
