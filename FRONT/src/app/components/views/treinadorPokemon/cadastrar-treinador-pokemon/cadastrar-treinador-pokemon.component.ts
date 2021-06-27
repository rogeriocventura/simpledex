import { Component, OnInit } from '@angular/core';
import { Treinadores } from 'src/app/models/Treinadores';
import { Pokemons } from 'src/app/models/Pokemons';
import { TreinadorPokemon } from 'src/app/models/TreinadorPokemon';
import { TreinadoresService } from 'src/app/services/treinadores.service';
import { PokemonsService } from 'src/app/services/pokemons.service';
import { TreinadorPokemonService } from 'src/app/services/treinadorPokemon.service';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-cadastrar-treinador-pokemon',
  templateUrl: './cadastrar-treinador-pokemon.component.html',
  styleUrls: ['./cadastrar-treinador-pokemon.component.css']
})
export class CadastrarTreinadorPokemonComponent implements OnInit {
  treinadorPokemon : TreinadorPokemon = new TreinadorPokemon();
  treinadores : Treinadores[] = [];
  pokemons : Pokemons[] = [];
  treinadorId : string = "";
  pokemonId : string = "";
  treinador : Treinadores = new Treinadores();
  pokemon : Pokemons = new Pokemons();


  constructor(private service : TreinadorPokemonService, private service2 : TreinadoresService, private service3 : PokemonsService) { }

  ngOnInit(): void {
    this.service2.listar().subscribe(( treinador) => {
      this.treinadores = treinador;
    })
    this.service3.listar().subscribe(( pokemon) => {
      this.pokemons = pokemon;
    })
  }

  cadastrar(treinadorId : string, pokemonId : string): void{
    console.log(treinadorId);
    console.log(pokemonId);
    
      this.treinadorPokemon.treinador = treinadorId;
    
    
      this.treinadorPokemon.pokemon = pokemonId;
    
    console.log(this.treinadorPokemon);
    this.service.cadastrarTreinadorPokemon(this.treinadorPokemon).subscribe((treinadorPokemon) => {
      console.log(treinadorPokemon);
    })
  }

}
