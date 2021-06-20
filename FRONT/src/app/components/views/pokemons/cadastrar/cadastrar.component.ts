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
  creatAt!: string;
  constructor(private service : PokemonsService) { 

  }

  ngOnInit(): void {
  }

  cadastrar(): void{
    let pokemon = new Pokemons();
    pokemon.createdAt = new Date(this.creatAt);
    console.log(pokemon.createdAt);

    this.service.cadastrar(pokemon).subscribe((pokemon) => {
      console.log(pokemon);
    })
  }
}
