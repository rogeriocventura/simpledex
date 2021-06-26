import { PokemonsService } from './../../../../services/pokemons.service';
import { Pokemons } from './../../../../models/Pokemons';
import { Component, OnInit} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-buscar-pokemon',
  templateUrl: './buscar-pokemon.component.html',
  styleUrls: ['./buscar-pokemon.component.css']
})
export class BuscarPokemonComponent implements OnInit {
  pokemons!: MatTableDataSource<Pokemons>;
  displayedColumns: string[] = ['nome','tipo','descricao'];
  pokemon : Pokemons = new Pokemons();
  nomePokemon : string = "";
    
  constructor(private service: PokemonsService) { }

  ngOnInit(): void {
    this.pokemons = new MatTableDataSource<Pokemons>();
  }
  buscar(nomePokemon : string): void{
    this.service.buscar(nomePokemon).subscribe((pokemon) => {
      this.pokemons = new MatTableDataSource<Pokemons>(pokemon);
    })
  }
}