import { Pokemons } from './../../../../models/Pokemons';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})


export class ListarComponent implements OnInit {
  pokemons : Pokemons[] = [];

  constructor(private http: HttpClient) { 

    http.get<Pokemons[]>("http://localhost:3000/simpledex/pokemon/listar").subscribe(( lista ) => {
        this.pokemons = lista;
        console.log(this.pokemons);        
    });
    
  }

  ngOnInit(): void {
    const pokemon = new Pokemons();
  }

}
