import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

import { Categoria } from '../models';

@Injectable()
export class CategoriaService {

  private endpoint: string = environment.apiConsumeUrl;

  constructor(private http: HttpClient) { }

  public findAll(): Observable<Categoria[]> {

    return this.http.get<Categoria[]>(this.endpoint + 'categorias/findAll' , );
  }
}
