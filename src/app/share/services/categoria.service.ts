import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

import { Categoria } from '../models';

@Injectable()
export class CategoriaService {

  private categoria: Categoria;
  private endpoint: string = environment.apiConsumeUrl;

  constructor(private http: HttpClient) { }

  public findAll(): Observable<Categoria[]> {

    return this.http.get<Categoria[]>(this.endpoint + 'categorias/findAll');
  }

  public findByCategoriaPai(id: number): Observable<Categoria[]> {

    return this.http.get<Categoria[]>(this.endpoint + `categorias/findByCategoriaPai/${id}`);
  }

  public findById(id: number): Observable<Categoria> {

    return this.http.get<Categoria>(this.endpoint + `categorias/findById/${id}`);
  }

  public save(categoria: Categoria): Observable<Categoria> {

    return this.http.post(this.endpoint + `categorias/${categoria.idPai}`, categoria);
  }

  public delete(id: number): Observable<boolean> {

    return this.http.delete<boolean>(this.endpoint + `categorias/${id}`);
  }

  public editar(categoria: Categoria): Observable<Categoria> {

    return this.http.put(this.endpoint + `categorias`, categoria);
  }

}
