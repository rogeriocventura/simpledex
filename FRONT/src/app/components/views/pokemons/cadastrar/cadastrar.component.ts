import { PokemonsService } from './../../../../services/pokemons.service';
import { Component, OnInit } from '@angular/core';
import { Pokemons } from 'src/app/models/Pokemons';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  pokemon : Pokemons = new Pokemons();
  campo : string = "";
  constructor(private service : PokemonsService) { 

  }

  ngOnInit(): void {
  }

  cadastrar(): void{
    console.log(this.pokemon.createdAt);
    // this.pokemon = new Pokemons();
    // this.pokemon.createdAt = new Date("2021/06/14");
    this.service.cadastrar(this.pokemon).subscribe((pokemon) => {
      console.log(pokemon);
    })
  }
}
