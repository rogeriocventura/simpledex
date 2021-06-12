import { Pokemons } from './../models/Pokemons';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  private baseURL = "http://localhost:3000/";

  constructor(private http: HttpClient) { }

  listar() : Observable<Pokemons[]>{
    return this.http.get<Pokemons[]>(`${this.baseURL}simpledex/pokemon/listar`);
  }

  cadastrar(pokemon : Pokemons) : Observable<Pokemons>{
    return this.http.post<Pokemons>(`${this.baseURL}/simpledex/pokemon/cadastrar`, pokemon);
  }
}