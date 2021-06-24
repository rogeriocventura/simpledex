import { PokemonsService } from './../../../../services/pokemons.service';
import { Pokemons } from './../../../../models/Pokemons';
import { Component, OnInit} from '@angular/core';



@Component({
  selector: 'app-buscar-pokemon',
  templateUrl: './buscar-pokemon.component.html',
  styleUrls: ['./buscar-pokemon.component.css']
})
export class BuscarPokemonComponent implements OnInit {
  pokemons : Pokemons[] = [];
  pokemon : Pokemons = new Pokemons();
  nomePokemon : string = "";
    
  constructor(private service: PokemonsService) { }

  ngOnInit(): void {
  }
  buscar(nomePokemon : string): void{
    this.service.buscar(nomePokemon).subscribe((pokemon) => {
      this.pokemons = pokemon; 
    })
  }
}
