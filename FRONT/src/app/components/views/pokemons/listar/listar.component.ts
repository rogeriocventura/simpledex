import { PokemonsService } from './../../../../services/pokemons.service';
import { Pokemons } from './../../../../models/Pokemons';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})


export class ListarComponent implements OnInit {
  //pokemons : Pokemons[] = [];

  Pokemons!: MatTableDataSource<Pokemons>;
  displayedColumns: string[] = ['pokemon.nome','pokemon.descricao','pokemon.tipo','pokemon.createdAt'];
  pokemons : Pokemons = new Pokemons();

  constructor(private service: PokemonsService) { }

  ngOnInit(): void {
    this.service.listar().subscribe(( pokemons ) => {
      this.Pokemons = new MatTableDataSource<Pokemons>(pokemons);
    });
  }

}
