import { PokemonsService } from './../../../../services/pokemons.service';
import { Pokemons } from './../../../../models/Pokemons';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})


export class ListarComponent implements OnInit {
  pokemons : Pokemons[] = [];

  constructor(private service: PokemonsService) { }

  ngOnInit(): void {
    this.service.listar().subscribe(( pokemons ) => {
      this.pokemons = pokemons; 
    });
  }

}
