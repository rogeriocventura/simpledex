import { PokemonsService } from './../../../../services/pokemons.service';
import { Pokemons } from './../../../../models/Pokemons';
import { Component, OnInit} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-remover-pokemon',
  templateUrl: './remover-pokemon.component.html',
  styleUrls: ['./remover-pokemon.component.css']
})
export class RemoverPokemonComponent implements OnInit {
  pokemons : Pokemons[] = [];
  pokemon : Pokemons = new Pokemons();
  pokemonId : string = "";
  constructor(private service : PokemonsService) { }

  ngOnInit(): void {
    this.service.listar().subscribe((pokemon) => {
      this.pokemons = pokemon;
    })
  }
  remover(nome : string): void {
    this.service.remover(nome).subscribe((pokemon) => {
      console.log(pokemon);
    })
  }
}
