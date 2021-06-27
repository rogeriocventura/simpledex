import { TreinadorPokemon } from '../models/TreinadorPokemon';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TreinadorPokemonService {

  private baseURL = "http://localhost:3000/";

  constructor(private http: HttpClient) { }

  listarTreinadorPokemon() : Observable<TreinadorPokemon[]>{
    return this.http.get<TreinadorPokemon[]>(`${this.baseURL}simpledex/treinadorPokemon/listar`);
  }

  cadastrarTreinadorPokemon(treinadorPokemon : TreinadorPokemon) : Observable<TreinadorPokemon>{
    return this.http.post<TreinadorPokemon>(`${this.baseURL}simpledex/treinadorPokemon/cadastrar`, treinadorPokemon);
  }

  listarPokemonDoTreinador(pokeId : string) : Observable<TreinadorPokemon[]>{
    return this.http.get<TreinadorPokemon[]>(`${this.baseURL}simpledex/treinadorPokemon/listarPokemon/`+ pokeId);
  }

  listarTreinadoresPorPokemon(nome : string) : Observable<TreinadorPokemon[]>{
    return this.http.get<TreinadorPokemon[]>(`${this.baseURL}simpledex/treinadorPokemon/listarTreinadores/`+ nome);
  }

  quantidadePokemonDoTreinadorPorTipo(pokeId : string) : Observable<TreinadorPokemon[]>{
    return this.http.get<TreinadorPokemon[]>(`${this.baseURL}simpledex/treinadorPokemon/contarPokemonPorTipo/`+ pokeId);
  }

  quantidadePokemonDoTreinador(pokeId : string) : Observable<TreinadorPokemon[]>{
    return this.http.get<TreinadorPokemon[]>(`${this.baseURL}simpledex/treinadorPokemon/contarPokemon/`+ pokeId);
  }

}
