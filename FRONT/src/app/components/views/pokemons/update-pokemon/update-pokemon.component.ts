import { Pokemons } from 'src/app/models/Pokemons';
import { Component, OnInit } from '@angular/core';
import { PokemonsService } from 'src/app/services/pokemons.service';

@Component({
  selector: 'app-update-pokemon',
  templateUrl: './update-pokemon.component.html',
  styleUrls: ['./update-pokemon.component.css']
})
export class UpdatePokemonComponent implements OnInit {
  pokemon : Pokemons = new Pokemons();
  constructor(private service : PokemonsService) { }

  ngOnInit(): void {
  }
  alterar(){
    this.service.atualizar(this.pokemon).subscribe((pokemon) => {
      console.log(pokemon);
    })
  }
}