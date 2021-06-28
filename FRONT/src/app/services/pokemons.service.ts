import { Pokemons } from 'src/app/models/Pokemons';
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

  buscar(nomePokemon : string) : Observable<Pokemons[]>{
    return this.http.get<Pokemons[]>(`${this.baseURL}simpledex/pokemon/buscar/`+ nomePokemon);
  }

  cadastrar(pokemon : Pokemons) : Observable<Pokemons>{
    return this.http.post<Pokemons>(`${this.baseURL}simpledex/pokemon/cadastrar`, pokemon);
  }

  atualizar(pokemon : Pokemons) : Observable<Pokemons>{
    return this.http.put<Pokemons>(`${this.baseURL}simpledex/pokemon/alterar`, pokemon);
  }
}
