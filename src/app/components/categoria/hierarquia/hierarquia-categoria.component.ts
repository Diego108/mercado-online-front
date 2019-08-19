import { Component, OnInit, Input } from '@angular/core';
import { Categoria, CategoriaService } from 'src/app/share';

@Component({
  selector: 'app-hierarquia-categoria',
  templateUrl: './hierarquia-categoria.component.html',
  styleUrls: ['./hierarquia-categoria.component.css']
})
export class HierarquiaCategoriaComponent implements OnInit{

  @Input()
  public id: number;

  @Input()
  public nomeCategoriaPai: string;

  @Input()
  public categorias: Categoria[];

  constructor(private categoriaService: CategoriaService) { }

  ngOnInit() {
  }
}
